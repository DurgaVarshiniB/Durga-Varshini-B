import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { heroes } from '../data/data';
import { ChevronLeft, Heart, Star } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { motion, AnimatePresence } from 'motion/react';

export default function HeroDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite, isStoryCompleted } = useProgress();
  const [showImageModal, setShowImageModal] = React.useState(false);

  const hero = heroes.find(h => h.id === id);
  if (!hero) return null;

  const completed = isStoryCompleted(hero.id);

  return (
    <div className="min-h-screen bg-transparent pb-32">
      {/* Image Popup Modal */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowImageModal(false)}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.img 
              layoutId={`hero-image-${hero.id}`}
              src={hero.image} 
              alt={t(hero.name)} 
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full rounded-3xl shadow-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Header */}
      <div className="relative h-[60vh] w-full overflow-hidden rounded-b-[4rem] shadow-2xl">
        <motion.img 
          layoutId={`hero-image-${hero.id}`}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={hero.image} 
          alt={t(hero.name)} 
          referrerPolicy="no-referrer"
          onClick={() => setShowImageModal(true)}
          className="w-full h-full object-cover cursor-zoom-in" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
        
        {/* Navigation Overlays */}
        <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-10">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 text-white"
          >
            <ChevronLeft size={28} strokeWidth={3} />
          </motion.button>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleFavorite(hero.id)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30 transition-all ${
              isFavorite(hero.id) ? 'bg-primary border-primary text-white' : 'bg-white/20 text-white'
            }`}
          >
            <Heart size={28} fill={isFavorite(hero.id) ? 'currentColor' : 'none'} strokeWidth={3} />
          </motion.button>
        </header>

        {/* Hero Title Overlay */}
        <div className="absolute bottom-10 left-10 right-10">
           <div className="bg-primary h-1.5 w-16 rounded-full mb-4" />
           <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2 leading-none">
             {hero.category === 'Freedom Fighter' ? t({ en: 'Freedom Fighter', kn: 'ಸ್ವಾತಂತ್ರ್ಯ ಹೋರಾಟಗಾರ', hi: 'स्वतंत्रता सेनानी' }) : 
              hero.category === 'Poet' ? t({ en: 'Great Writer', kn: 'ಮಹಾನ್ ಲೇಖಕ', hi: 'महान लेखक' }) : 
              hero.category}
           </p>
           <h1 className="text-5xl font-serif font-black text-white leading-[0.9] tracking-tighter mb-2 italic">
             {t(hero.name)}
           </h1>
           {hero.lifespan && (
             <p className="text-white/80 text-xs font-bold mb-4 bg-white/10 backdrop-blur-sm inline-block px-3 py-1 rounded-full">
               {hero.lifespan}
             </p>
           )}
           <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-secondary/50 flex items-center justify-center overflow-hidden">
                       <span className="text-[10px]">👤</span>
                    </div>
                 ))}
              </div>
              <span className="text-white/80 text-[10px] font-black uppercase tracking-wider">
                Explore with friends
              </span>
           </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-10 mt-12">
        <div className="flex items-center gap-4 mb-8">
           <button className="flex-1 py-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-sm border border-white/10 flex items-center justify-center gap-2">
              <Star size={18} className="text-accent" fill="currentColor" />
              <span className="text-[10px] font-black uppercase text-white">About Hero</span>
           </button>
           <button className="flex-1 py-4 bg-white/5 backdrop-blur-sm rounded-2xl shadow-sm border border-white/5 flex items-center justify-center gap-2 opacity-40">
              <Star size={18} />
              <span className="text-[10px] font-black uppercase text-white">History</span>
           </button>
        </div>

        {hero.stats && (
          <div className="flex gap-4 mb-8">
            {hero.stats.map((stat, i) => (
              <div key={i} className="flex-1 p-4 bg-white/5 backdrop-blur-md rounded-2xl shadow-sm border border-white/10 flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-white/40 mb-1">{t(stat.label)}</span>
                <span className="text-sm font-black text-accent">{stat.value}</span>
              </div>
            ))}
          </div>
        )}

        <h3 className="text-2xl font-serif font-black text-primary mb-4 italic">The Story Begins</h3>
        <p className="text-white/60 font-sans font-medium leading-relaxed mb-10 text-sm">
           {t(hero.description)}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-4">
           <button 
             onClick={() => navigate(`/story/${hero.id}`)}
             className="w-full py-6 bg-accent text-white rounded-[2.5rem] font-sans font-bold text-sm uppercase tracking-[0.2em] shadow-xl shadow-accent/20 active:scale-95 transition-all flex items-center justify-center gap-3"
           >
             {completed ? 'Re-Read Story' : 'Read Story'}
           </button>
           <button 
             onClick={() => navigate(`/quiz?heroId=${hero.id}`)}
             className="w-full py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-[2.5rem] font-sans font-bold text-sm uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all text-center"
           >
             Play Quiz
           </button>
        </div>
      </div>
    </div>
  );
}
