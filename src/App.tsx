import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { doc, getDocFromServer } from 'firebase/firestore';
import { db } from './lib/firebase';

// Contexts
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ProgressProvider } from './contexts/ProgressContext';

// Components
import BottomNav from './components/BottomNav';
import Splash from './components/Splash';

// Pages
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import Stories from './pages/Stories';
import HeroDetail from './pages/HeroDetail';
import StoryContent from './pages/StoryContent';
import Quiz from './pages/Quiz';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return null;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

function AppRoutes() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Don't show bottom nav on story content page, login page or quiz page
  const hideNav = location.pathname.startsWith('/story/') || location.pathname === '/login' || location.pathname === '/quiz';

  const isLogin = location.pathname === '/login';
  const isHome = location.pathname === '/';
  const isProfile = location.pathname === '/profile';
  const isFavorites = location.pathname === '/favorites';
  const isQuiz = location.pathname === '/quiz';
  const isStories = location.pathname === '/stories';
  
  const searchParams = new URLSearchParams(location.search);
  const isFreedomFighters = location.pathname === '/heroes' && searchParams.get('category') === 'Freedom Fighter';
  const isPoets = location.pathname === '/heroes' && searchParams.get('category') === 'Poet';
  const isReformers = location.pathname === '/heroes' && searchParams.get('category') === 'Reformer';
  const isLeaders = location.pathname === '/heroes' && searchParams.get('category') === 'Leader';

  const isLightPage = isHome || isProfile || isFavorites || isQuiz || isStories || isFreedomFighters || isPoets || isReformers || isLeaders;

  return (
    <div className={`max-w-md mx-auto min-h-screen relative shadow-2xl overflow-x-hidden border-x ${
      isLogin ? 'bg-[#0f1014] border-white/5' :
      isLightPage
        ? 'bg-white border-gray-100'
        : 'bg-gradient-to-b from-[#0f1014] via-[#121926] to-[#0f1014] border-white/5'
    }`}>
      {/* Decorative Accents & Backgrounds */}
      {isQuiz ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden text-blue-500">
           <div className="absolute top-[10%] left-[-20%] w-96 h-96 bg-blue-100/40 rounded-full blur-[100px]" />
           <div className="absolute bottom-[10%] right-[-15%] w-80 h-80 bg-sky-200/40 rounded-full blur-[100px]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        </div>
      ) : isLogin ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-900/20 to-transparent" />
          <div className="absolute top-[-10%] right-[-20%] w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-15%] w-[28rem] h-[28rem] bg-indigo-600/10 rounded-full blur-[100px]" />
        </div>
      ) : isProfile ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-purple-600/5 to-transparent" />
          <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-purple-400/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-10%] w-64 h-64 bg-fuchsia-200/20 rounded-full blur-[80px]" />
        </div>
      ) : isFavorites ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-600/10 to-transparent" />
          <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-400/5 rounded-full blur-[100px]" />
        </div>
      ) : isStories ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-[-5%] left-[-10%] w-80 h-80 bg-sky-200/30 rounded-full blur-[100px]" />
           <div className="absolute bottom-[15%] right-[-10%] w-72 h-72 bg-blue-100/20 rounded-full blur-[90px]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        </div>
      ) : isFreedomFighters ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-purple-300/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-64 h-64 bg-fuchsia-200/30 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        </div>
      ) : isPoets ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] right-[-10%] w-80 h-80 bg-blue-300/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] left-[-5%] w-64 h-64 bg-sky-200/30 rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(56,189,248,0.1)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        </div>
      ) : isReformers ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-80 h-80 bg-emerald-300/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[-15%] w-80 h-80 bg-green-200/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        </div>
      ) : isLeaders ? (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] left-[-5%] w-80 h-80 bg-amber-300/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[15%] right-[-10%] w-72 h-72 bg-yellow-200/20 rounded-full blur-[90px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[radial-gradient(circle,rgba(245,158,11,0.08)_0%,rgba(255,255,255,0)_70%)] blur-[60px]" />
        </div>
      ) : isHome ? (
        <>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] aspect-square bg-[radial-gradient(circle,rgba(56,189,248,0.4)_0%,rgba(255,255,255,0)_70%)] blur-[80px] pointer-events-none" />
          <div className="absolute top-[20%] left-[-10%] w-64 h-64 bg-blue-300/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[-10%] w-80 h-80 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-[-5%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-[30%] left-[-20%] w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[-10%] w-72 h-72 bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />
        </>
      )}
      
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/heroes" element={<ProtectedRoute><Heroes /></ProtectedRoute>} />
          <Route path="/stories" element={<ProtectedRoute><Stories /></ProtectedRoute>} />
          <Route path="/hero/:id" element={<ProtectedRoute><HeroDetail /></ProtectedRoute>} />
          <Route path="/story/:id" element={<ProtectedRoute><StoryContent /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
      </AnimatePresence>
      {!hideNav && isAuthenticated && <BottomNav />}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            {loading && <Splash />}
            <AppRoutes />
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

