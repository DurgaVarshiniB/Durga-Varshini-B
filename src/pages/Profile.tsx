import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useProgress } from '../contexts/ProgressContext';
import { useAuth } from '../contexts/AuthContext';
import { heroes } from '../data/data';
import HeroCard from '../components/HeroCard';
import { Settings, Moon, Sun, Heart, Volume2, Share2, ChevronLeft, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { language, setLanguage, t } = useLanguage();
  const { favorites } = useProgress();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const favoriteHeroes = heroes.filter(h => favorites.includes(h.id));

  return (
    <div className="pb-32 pt-10 px-6 min-h-screen bg-transparent">
      {/* Profile Header */}
      <header className="flex items-center justify-between mb-10">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 transition-transform active:scale-90"
        >
          <ChevronLeft size={24} className="text-dark/40" />
        </button>
        <h1 className="text-xl font-display font-black text-primary tracking-tighter uppercase">My Profile</h1>
        <button 
          onClick={logout}
          className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-primary transition-transform active:scale-90"
        >
          <LogOut size={22} />
        </button>
      </header>

      {/* User Info - Mockup Style */}
      <div className="flex flex-col items-center mb-10">
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full bg-white p-1.5 border-4 border-gray-100 shadow-xl">
             <div className="w-full h-full rounded-full bg-accent flex items-center justify-center overflow-hidden">
                <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.uid || 'Namma'}`} 
                    alt="Avatar" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                 />
             </div>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-md" />
        </div>
        <h2 className="text-2xl font-display font-black text-dark mb-1">Hello, {user?.displayName || 'User'}! 👋</h2>
        <p className="text-gray-500 font-bold text-xs uppercase tracking-tight">Keep exploring our inspiring stories.</p>
      </div>

      {/* Language Selection */}
      <section className="mb-10">
         <div className="flex bg-white p-2 rounded-3xl shadow-sm border border-gray-100">
            {(['en', 'kn', 'hi'] as const).map(l => (
               <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                     language === l ? 'bg-primary text-white shadow-md' : 'text-gray-500'
                  }`}
               >
                  {l === 'en' ? 'English' : l === 'kn' ? 'ಕನ್ನಡ' : 'ಹಿन्दी'}
               </button>
            ))}
         </div>
      </section>

      {/* Favorites Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-display font-black text-dark tracking-tight">My Favorites</h3>
          <button onClick={() => navigate('/favorites')} className="text-primary font-bold text-xs">View All</button>
        </div>
        
        {favoriteHeroes.length > 0 ? (
          <div className="space-y-4">
            {favoriteHeroes.slice(0, 3).map(hero => (
              <div key={hero.id}>
                <HeroCard hero={hero} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-10 rounded-[2.5rem] text-center border-4 border-dashed border-gray-100">
            <Heart size={40} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-500 font-bold text-sm">No favorites yet!</p>
          </div>
        )}
      </section>

      {/* Settings - Mockup Style */}
      <section className="pb-10">
        <h3 className="text-lg font-display font-black text-dark tracking-tight mb-6">Settings</h3>
        <div className="bg-white rounded-[2.5rem] p-4 shadow-sm border border-gray-100 space-y-2">
           <SettingItem 
              icon={<Moon size={20} />} 
              label="Dark Mode" 
              enabled={false} 
              onToggle={() => {}} 
           />
           <SettingItem 
              icon={<Volume2 size={20} />} 
              label="Text to Speech" 
              enabled 
           />
           <SettingItem 
              icon={<Share2 size={20} />} 
              label="Share App" 
           />
        </div>
      </section>
    </div>
  );
}

function SettingItem({ icon, label, enabled = false, onToggle }: { icon: React.ReactNode, label: string, enabled?: boolean, onToggle?: () => void }) {
  return (
    <div 
      className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group"
      onClick={onToggle}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="font-display font-black text-sm text-dark">{label}</span>
      </div>
      {label !== "Share App" ? (
        <div className={`w-12 h-6 rounded-full p-1 transition-colors ${enabled ? 'bg-primary' : 'bg-gray-200'}`}>
          <div className={`w-4 h-4 rounded-full transition-transform ${enabled ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'}`} />
        </div>
      ) : (
        <ChevronLeft size={20} className="text-gray-300 rotate-180" />
      )}
    </div>
  );
}
