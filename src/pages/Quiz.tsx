import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { quizQuestions } from '../data/data';
import { Trophy, ChevronLeft, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';

export default function Quiz() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const heroId = searchParams.get('heroId');

  const questions = useMemo(() => {
    if (!heroId) return quizQuestions.slice(0, 5);
    return quizQuestions.filter(q => q.heroId === heroId);
  }, [heroId]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === questions[currentQuestion].correctIndex) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#6B4EE0', '#FFD166', '#FF5B94']
      });
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-transparent flex flex-col items-center justify-center p-6 pb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[4rem] p-10 text-center shadow-2xl w-full max-w-sm border border-gray-100"
        >
          <div className="w-40 h-40 bg-accent rounded-[3rem] flex items-center justify-center mx-auto mb-8 relative shadow-2xl shadow-accent/20">
             <Trophy size={80} className="text-white" strokeWidth={1.5} />
             <div className="absolute -top-4 -right-4 bg-accent w-16 h-16 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                <span className="text-xl font-bold">🎉</span>
             </div>
          </div>
          
          <h2 className="text-4xl font-display font-black text-dark mb-2 uppercase leading-none tracking-tighter">Great Job!</h2>
          <p className="text-gray-500 font-bold mb-10 text-sm tracking-widest uppercase">You Scored</p>
          
          <div className="text-6xl font-display font-black text-accent mb-12">
            {score} <span className="text-2xl text-gray-300">/ {questions.length}</span>
          </div>

          <div className="bg-gray-50 p-4 rounded-3xl mb-12 border border-gray-100">
             <div className="flex items-center gap-3 text-left">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                   <Award size={24} className="text-accent" />
                </div>
                <div className="min-w-0">
                   <p className="text-[10px] font-black font-display text-accent uppercase">New Badge Earned!</p>
                   <p className="text-sm font-bold text-dark truncate">History Explorer</p>
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedOption(null);
                setScore(0);
                setShowResult(false);
              }}
              className="py-4 rounded-3xl font-display font-black text-sm uppercase tracking-widest border-2 border-gray-100 text-gray-400"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="py-4 bg-accent text-white rounded-3xl font-display font-black text-sm uppercase tracking-widest shadow-lg shadow-accent/20"
            >
              Results
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="min-h-screen bg-transparent flex flex-col pb-32">
      <header className="px-10 pt-12 pb-8 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100"
        >
          <ChevronLeft size={24} className="text-dark/60" />
        </button>
        <h1 className="text-xl font-display font-black uppercase tracking-tighter text-dark">Quiz Time</h1>
        <div className="w-12 h-12" />
      </header>

      <div className="px-8 flex-1 flex flex-col justify-center">
        <p className="text-gray-600 font-bold text-xs mb-4 uppercase tracking-[0.2em]">Question {currentQuestion + 1}/{questions.length}</p>
        
        <div className="bg-white rounded-[3rem] p-10 text-center shadow-xl relative mb-12 min-h-[160px] flex items-center justify-center border border-gray-100">
          <h2 className="text-2xl font-display font-black text-primary leading-tight">
            {question ? t(question.question) : ''}
          </h2>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-gray-50 rounded-[2rem] -z-10" />
        </div>

        <div className="space-y-4">
          {question && t(question.options).map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full h-20 rounded-3xl flex items-center px-6 gap-6 text-left transition-all border-2 ${
                selectedOption === null 
                  ? 'bg-white border-gray-100 text-primary hover:border-primary/20 hover:bg-gray-50' 
                  : index === question.correctIndex
                    ? 'bg-success/10 border-success text-success'
                    : selectedOption === index
                      ? 'bg-accent/10 border-accent text-accent'
                      : 'bg-gray-50 border-gray-50 opacity-50 text-gray-300 shadow-none'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-lg ${
                selectedOption === null
                  ? 'bg-gray-50 text-primary border border-gray-100'
                  : index === question.correctIndex
                    ? 'bg-success text-white'
                    : selectedOption === index
                      ? 'bg-accent text-white'
                      : 'bg-gray-200 text-gray-400 shadow-none'
              }`}>
                {optionLabels[index]}
              </div>
              <span className="font-display font-black text-xs uppercase tracking-widest flex-1">
                {option}
              </span>
              {selectedOption !== null && index === question.correctIndex && (
                <div className="w-6 h-6 bg-success text-white rounded-full flex items-center justify-center">
                   <ChevronLeft size={16} strokeWidth={4} className="rotate-180" />
                </div>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={nextQuestion}
          disabled={selectedOption === null}
          className="mt-14 w-full bg-accent text-white py-6 rounded-[2.5rem] font-display font-black text-xl tracking-widest shadow-xl shadow-accent/20 disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none transition-all uppercase"
        >
          {currentQuestion === questions.length - 1 ? 'Show Results' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}
