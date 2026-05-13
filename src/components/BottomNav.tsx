import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Compass, Brain, Heart, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const items = [
  { path: '/', icon: Home, label: { en: 'Home', kn: 'ಮನೆ', hi: 'होम' } },
  { path: '/stories', icon: Compass, label: { en: 'Stories', kn: 'ಕಥೆಗಳು', hi: 'कहानियाँ' } },
  { path: '/quiz', icon: Brain, label: { en: 'Quiz', kn: 'ಸವಾಲು', hi: 'क्विज़' } },
  { path: '/favorites', icon: Heart, label: { en: 'Favorites', kn: 'ಮೆಚ್ಚಿನವುಗಳು', hi: 'पसंदीदा' } },
  { path: '/profile', icon: User, label: { en: 'Profile', kn: 'ಪ್ರೊಫೈಲ್', hi: 'प्रोफ़ाइल' } },
];

export default function BottomNav() {
  const { t } = useLanguage();
  const location = useLocation();

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
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 px-6 pb-6">
      <nav className={`backdrop-blur-xl rounded-[2.5rem] px-6 py-4 flex justify-between items-center shadow-2xl border transition-colors ${
        isLightPage 
          ? 'bg-white/80 border-gray-100 text-dark' 
          : 'bg-[#121926]/80 border-white/10 text-white'
      }`}>
        {items.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => `flex flex-col items-center gap-1 group transition-all px-3 py-2 rounded-2xl ${
              isActive && isLightPage ? 'bg-primary/5' : ''
            }`}
          >
            {({ isActive }) => (
              <>
                <div className={`transition-all duration-300 ${
                  isActive 
                    ? 'text-accent scale-110' 
                    : isLightPage 
                      ? 'text-gray-400 group-hover:text-primary transition-colors' 
                      : 'text-white/30 group-hover:text-white/60'
                }`}>
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
                </div>
                <span className={`text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'text-accent scale-105' 
                    : isLightPage 
                      ? 'text-gray-500' 
                      : 'text-white/30'
                }`}>
                  {t(label)}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
