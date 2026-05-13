import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Hero } from '../data/data';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../contexts/ProgressContext';
import { motion } from 'motion/react';

interface HeroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hero: Hero;
  variant?: 'card' | 'horizontal' | 'list';
  key?: React.Key;
}

export default function HeroCard({ hero, variant = 'card', ...props }: HeroCardProps) {
  const { t } = useLanguage();
  const { isFavorite, toggleFavorite, isStoryCompleted } = useProgress();
  const navigate = useNavigate();
  const location = useLocation();
  const completed = isStoryCompleted(hero.id);
  const isHome = location.pathname === '/';
  const isStoriesPage = location.pathname === '/stories';
  const isFavoritesPage = location.pathname === '/favorites';
  const isProfilePage = location.pathname === '/profile';
  const isQuizPage = location.pathname === '/quiz';
  const searchParams = new URLSearchParams(location.search);
  const categoryFilter = searchParams.get('category');
  const isCategoryLight = location.pathname === '/heroes' && categoryFilter && ['Freedom Fighter', 'Poet', 'Reformer', 'Leader'].includes(categoryFilter);
  const isLightMode = isHome || isStoriesPage || isFavoritesPage || isProfilePage || isQuizPage || isCategoryLight;

  if (variant === 'horizontal') {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate(`/hero/${hero.id}`)}
        className="w-[280px] h-[360px] relative rounded-[3rem] overflow-hidden shadow-xl cursor-pointer group"
      >
        <img 
          src={hero.image} 
          alt={t(hero.name)} 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
        
        <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
          <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Featured</span>
          </div>
          {completed && (
            <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
              <CheckCircle2 size={16} strokeWidth={4} />
            </div>
          )}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-accent h-1 w-12 rounded-full mb-3" />
          <h3 className="text-2xl font-serif font-black text-white leading-tight mb-2 italic">
            {t(hero.name)}
          </h3>
          <p className="text-white/70 text-xs line-clamp-2 font-medium leading-relaxed mb-4">
            {t(hero.description)}
          </p>
          <div className="flex items-center gap-3">
             <button className="px-6 py-2.5 bg-accent text-white text-[10px] font-black rounded-xl shadow-lg uppercase tracking-widest">
               Discover
             </button>
             <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(hero.id);
              }}
              className={`w-10 h-10 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all ${
                isFavorite(hero.id) ? 'text-accent' : 'bg-white/10 text-white border border-white/20'
              }`}
            >
              <Heart size={18} fill={isFavorite(hero.id) ? 'currentColor' : 'none'} strokeWidth={3} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'list') {
    return (
      <motion.div
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate(`/hero/${hero.id}`)}
        className="flex items-center gap-4 py-2 group cursor-pointer"
      >
        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
          <img src={hero.image} alt={t(hero.name)} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <h3 className={`text-[17px] font-bold mb-0.5 ${isLightMode ? 'text-dark' : 'text-white'}`}>{t(hero.name)}</h3>
          <p className={`text-[13px] line-clamp-2 leading-tight mb-1 ${isLightMode ? 'text-gray-500' : 'text-white/40'}`}>
            {t(hero.description)}
          </p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/story/${hero.id}`);
            }}
            className="text-accent font-bold text-[11px] uppercase tracking-wider"
          >
            Read Story
          </button>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(hero.id);
          }}
          className={`w-10 h-10 flex items-center justify-center transition-all ${
            isFavorite(hero.id) ? 'text-accent' : (isLightMode ? 'text-gray-300' : 'text-white/20')
          }`}
        >
          <Heart size={22} fill={isFavorite(hero.id) ? 'currentColor' : 'none'} strokeWidth={1.5} />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/hero/${hero.id}`)}
      className={`p-4 rounded-[2rem] flex items-center gap-5 shadow-sm border cursor-pointer relative ${
        isLightMode 
          ? 'bg-white border-gray-100 backdrop-blur-none' 
          : 'bg-white/5 backdrop-blur-md border-white/5'
      }`}
    >
      <div className={`w-16 h-16 rounded-2xl overflow-hidden shadow-inner border flex-shrink-0 ${
        isLightMode ? 'border-gray-100' : 'border-white/10'
      }`}>
        <img src={hero.image} alt={t(hero.name)} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className={`text-base font-serif font-black leading-tight truncate italic ${
          isLightMode ? 'text-dark' : 'text-white'
        }`}>
          {t(hero.name)}
        </h3>
        <p className={`text-[10px] font-medium uppercase tracking-widest mt-1 truncate ${
          isLightMode ? 'text-gray-400' : 'text-white/40'
        }`}>
          {hero.category === 'Freedom Fighter' ? 'Freedom fighter queen' : hero.category === 'Poet' ? 'Great Kannada Poet & writer' : t(hero.description)}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(hero.id);
        }}
        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
          isFavorite(hero.id) ? 'text-accent' : (isLightMode ? 'text-gray-200' : 'text-white/20')
        }`}
      >
        <Heart size={20} fill={isFavorite(hero.id) ? 'currentColor' : 'none'} strokeWidth={3} />
      </button>

      {completed && (
        <div className="absolute -top-1 -right-1 bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
          <CheckCircle2 size={10} strokeWidth={4} />
        </div>
      )}
    </motion.div>
  );
}
