import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { heroes, categories } from '../data/data';
import HeroCard from '../components/HeroCard';
import { Search, Bell, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredGroup = heroes.filter(h => h.featured).slice(0, 5);

  return (
    <div className="pb-32 pt-6 min-h-screen bg-transparent">
      {/* Header - Matching Screenshot Screen 2 */}
      <header className="px-6 flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-gray-500">Hello, {user?.displayName || 'User'}! 👋</h2>
          <h1 className="text-2xl font-serif font-black text-primary leading-tight mt-1">
            Discover<br/>Inspiring Stories
          </h1>
        </div>
        <button className="w-12 h-12 flex items-center justify-center text-dark bg-white shadow-sm rounded-2xl relative border border-gray-100">
          <Bell size={24} />
          <div className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full border-2 border-white" />
        </button>
      </header>

      {/* Search Bar - Matching Screen 2 */}
      <section className="px-6 mb-10">
        <div className="relative flex items-center gap-3">
          <div className="relative flex-1 group">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search heroes, stories..."
              className="w-full bg-white h-14 pl-14 pr-6 rounded-2xl border border-gray-100 shadow-sm focus:outline-none focus:border-primary/20 font-sans font-medium text-sm transition-all text-dark placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform active:scale-95">
            <Search size={22} />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-dark">Categories</h2>
          <button onClick={() => navigate('/heroes')} className="text-primary font-bold text-[13px]">View All</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categories.slice(0, 4).map(cat => (
            <motion.button
              key={cat.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(`/heroes?category=${cat.id}`)}
              className="flex flex-col items-center gap-2 group"
            >
              <div 
                className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105"
                style={{ backgroundColor: cat.color }}
              >
                <span className="text-3xl">{cat.icon}</span>
              </div>
              <span className="text-[11px] font-bold text-gray-600 text-center leading-tight">
                {t(cat.label).split(' ')[0]}<br/>{t(cat.label).split(' ')[1] || ''}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Featured Heroes - Horizontal Card Scroll */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-4 px-7">
          <h2 className="text-xl font-bold text-dark tracking-tight">Our Heroes</h2>
          <button onClick={() => navigate('/heroes')} className="text-primary font-bold text-[13px]">Explore</button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 px-6 pb-6 snap-x no-scrollbar">
          {featuredGroup.map((hero) => (
            <div key={hero.id} className="snap-center">
              <HeroCard hero={hero} variant="horizontal" />
            </div>
          ))}
        </div>
      </section>

      {/* Popular Stories - List View */}
      <section className="px-6 pb-20">
        <div className="flex items-center justify-between mb-6 px-1">
           <h2 className="text-xl font-bold text-dark">Popular Stories</h2>
           <button onClick={() => navigate('/stories')} className="text-primary font-bold text-[13px]">View All</button>
        </div>
        <div className="space-y-6">
          {heroes.filter(h => h.featured).slice(0, 6).map(hero => (
            <HeroCard key={hero.id} hero={hero} variant="list" />
          ))}
        </div>
      </section>
    </div>
  );
}
