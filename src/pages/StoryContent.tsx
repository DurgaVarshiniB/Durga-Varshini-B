import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { stories, heroes, quizQuestions } from '../data/data';
import { ChevronLeft, Volume2, X, CheckCircle2, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../contexts/ProgressContext';
import confetti from 'canvas-confetti';

export default function StoryContent() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const { markStoryCompleted, isStoryCompleted } = useProgress();
  
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const story = stories.find(s => s.heroId === id);
  const hero = heroes.find(h => h.id === id);

  useEffect(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [currentPage]);

  if (!story || !hero) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-lavender-light p-10 text-center">
      <h1 className="text-2xl font-display font-bold text-gray-400">Story Coming Soon!</h1>
      <button onClick={() => navigate(-1)} className="mt-4 text-primary font-bold">Go Back</button>
    </div>
  );

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(t(story.pages[currentPage].text));
      utterance.lang = language === 'kn' ? 'kn-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const hasQuiz = quizQuestions.some(q => q.heroId === id);

  const next = () => {
    window.speechSynthesis.cancel();
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      const alreadyCompleted = isStoryCompleted(hero.id);
      markStoryCompleted(hero.id);
      
      if (!alreadyCompleted) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6B4EE0', '#FFD166', '#FF5B94']
        });
      }

      if (hasQuiz) {
        setShowQuizPrompt(true);
      } else {
        setTimeout(() => navigate(-1), alreadyCompleted ? 0 : 1500);
      }
    }
  };

  const [showQuizPrompt, setShowQuizPrompt] = useState(false);

  return (
    <div className="fixed inset-0 bg-lavender-light flex flex-col z-[60] overflow-hidden">
      {/* Dynamic Header */}
      <header className="p-8 flex items-center justify-between text-dark relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white rounded-[1.2rem] flex items-center justify-center shadow-sm border border-gray-100"
        >
          <X size={24} />
        </button>
        <h1 className="font-display font-black text-xl tracking-tighter uppercase">{t(hero.name)}</h1>
        <button 
          className="w-12 h-12 bg-white rounded-[1.2rem] flex items-center justify-center shadow-sm border border-gray-100"
        >
          <Bell size={24} className="opacity-50" />
        </button>
      </header>

      {/* Pages Container */}
      <div className="flex-1 relative overflow-hidden flex items-center justify-center px-6 pb-24">
        <AnimatePresence mode="wait">
          {!showQuizPrompt ? (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col"
            >
              <div className="flex-1 overflow-hidden relative">
                <img 
                  src={story.pages[currentPage].image} 
                  alt="Story" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-dark shadow-sm">
                  {currentPage + 1} / {story.pages.length}
                </div>
              </div>
              
              <div className="p-10 text-center bg-white">
                <h3 className="text-2xl font-display font-black text-dark mb-4">
                  {currentPage === 0 ? t({ en: 'The Inspiring Journey', kn: 'ಸ್ಪೂರ್ತಿದಾಯಕ ಪ್ರಯಾಣ', hi: 'प्रेरक यात्रा' }) : t({ en: 'Heroic Deeds', kn: 'ವೀರ ಕೃತ್ಯಗಳು', hi: 'वीर कार्य' })}
                </h3>
                <p className="text-sm font-sans font-medium text-gray-500 leading-relaxed mb-10 min-h-[80px] px-2">
                  {t(story.pages[currentPage].text)}
                </p>
                
                <div className="flex items-center gap-4 justify-between">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                    className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center disabled:opacity-20"
                  >
                    <ChevronLeft size={28} strokeWidth={3} />
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleSpeech}
                    className="flex-1 h-14 bg-primary text-white rounded-2xl font-display font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-primary/30"
                  >
                    <Volume2 size={24} />
                    {isSpeaking ? 'Pause' : 'Listen Story'}
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={next}
                    className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center"
                  >
                    <ChevronLeft size={28} strokeWidth={3} className="rotate-180" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="quiz-prompt"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] p-10 text-center shadow-2xl border-4 border-white max-w-sm"
            >
              <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 rotate-6 shadow-lg">
                <CheckCircle2 size={48} className="text-dark" strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-display font-black text-dark mb-4 uppercase leading-tight">Story Complete!</h2>
              <p className="text-gray-500 font-bold mb-10 leading-relaxed">
                Ready to test your knowledge about {t(hero.name)}?
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={() => navigate(`/quiz?heroId=${hero.id}`)}
                  className="w-full bg-accent text-white py-6 rounded-[2.5rem] font-display font-black text-lg tracking-widest kid-shadow-secondary active:scale-95 transition-all text-center uppercase"
                >
                  QUIZ TIME!
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="w-full text-gray-400 font-display font-black text-xs uppercase tracking-[0.2em] py-2"
                >
                  Maybe Later
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
