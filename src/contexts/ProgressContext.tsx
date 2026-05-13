import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';

interface ProgressContextType {
  completedStories: string[];
  markStoryCompleted: (heroId: string) => void;
  isStoryCompleted: (heroId: string) => boolean;
  favorites: string[];
  toggleFavorite: (heroId: string) => void;
  isFavorite: (heroId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [completedStories, setCompletedStories] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      setCompletedStories([]);
      setFavorites([]);
      return;
    }

    const docRef = doc(db, 'userProgress', user.uid);
    
    // Use onSnapshot for real-time updates from Firestore
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCompletedStories(data.completedStories || []);
        setFavorites(data.favorites || []);
      } else {
        // Initialize user progress if it doesn't exist
        const initialProgress = {
          userId: user.uid,
          completedStories: [],
          favorites: [],
          quizScores: {},
          badges: []
        };
        setDoc(docRef, initialProgress).catch(err => 
          handleFirestoreError(err, OperationType.WRITE, `userProgress/${user.uid}`)
        );
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `userProgress/${user.uid}`);
    });

    return () => unsubscribe();
  }, [user]);

  const saveProgress = async (newCompleted: string[], newFavorites: string[]) => {
    if (!user) return;
    const docRef = doc(db, 'userProgress', user.uid);
    try {
      await setDoc(docRef, {
        userId: user.uid,
        completedStories: newCompleted,
        favorites: newFavorites,
        quizScores: {}, // Maintain placeholders or fetch existing
        badges: []
      }, { merge: true });
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, `userProgress/${user.uid}`);
    }
  };

  const markStoryCompleted = (heroId: string) => {
    if (!completedStories.includes(heroId)) {
      const updated = [...completedStories, heroId];
      setCompletedStories(updated);
      saveProgress(updated, favorites);
    }
  };

  const isStoryCompleted = (heroId: string) => completedStories.includes(heroId);

  const toggleFavorite = (heroId: string) => {
    const updated = favorites.includes(heroId)
      ? favorites.filter(id => id !== heroId)
      : [...favorites, heroId];
    setFavorites(updated);
    saveProgress(completedStories, updated);
  };

  const isFavorite = (heroId: string) => favorites.includes(heroId);

  return (
    <ProgressContext.Provider value={{ 
      completedStories, 
      markStoryCompleted, 
      isStoryCompleted,
      favorites,
      toggleFavorite,
      isFavorite
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
