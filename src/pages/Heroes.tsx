import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { heroes, districts, categories } from '../data/data';
import HeroCard from '../components/HeroCard';
import { ChevronLeft, Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Heroes() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const districtFilter = searchParams.get('district');
  const categoryFilter = searchParams.get('category');

  const filteredHeroes = useMemo(() => {
    return heroes.filter(h => {
      const matchesDistrict = !districtFilter || h.districtId === districtFilter;
      const matchesCategory = !categoryFilter || h.category === categoryFilter;
      const matchesSearch = !searchQuery || 
        t(h.name).toLowerCase().includes(searchQuery.toLowerCase()) ||
        t(h.description).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDistrict && matchesCategory && matchesSearch;
    });
  }, [districtFilter, categoryFilter, searchQuery, t]);

  const activeDistrict = districts.find(d => d.id === districtFilter);
  const activeCategory = categories.find(c => c.id === categoryFilter);
  const isLightBackground = !!categoryFilter && ['Freedom Fighter', 'Poet', 'Reformer', 'Leader'].includes(categoryFilter);

  return (
    <div className="pb-32 pt-10 px-6 min-h-screen bg-transparent relative overflow-x-hidden">
      {/* Search Header Style from Mockup */}
      <header className={`flex items-center justify-between mb-8 -mx-6 px-6 py-4 ${isLightBackground ? 'bg-primary text-white shadow-lg' : ''}`}>
        <button 
          onClick={() => navigate(-1)}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform active:scale-90 ${
            isLightBackground 
              ? 'bg-white/20 border border-white/30 text-white' 
              : 'bg-white/5 backdrop-blur-md border border-white/10 text-white/40'
          }`}
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className={`text-xl font-display font-black tracking-tighter uppercase whitespace-nowrap overflow-hidden text-ellipsis px-4 flex-1 text-center ${
          isLightBackground ? 'text-white' : 'text-primary'
        }`}>
          {activeCategory ? t(activeCategory.label) : activeDistrict ? t(activeDistrict.name) : 'All Heroes'}
        </h1>
        <button 
           onClick={() => setIsSearchOpen(!isSearchOpen)}
           className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 ${
             isSearchOpen 
               ? 'bg-accent text-white border-accent' 
               : isLightBackground 
                 ? 'bg-white/20 text-white border border-white/30' 
                 : 'bg-white/5 text-white/40 border border-white/10'
           }`}
        >
          {isSearchOpen ? <X size={22} /> : <Search size={22} />}
        </button>
      </header>

      {/* Search Input */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginBottom: 0 }}
            animate={{ height: 'auto', opacity: 1, marginBottom: 24 }}
            exit={{ height: 0, opacity: 0, marginBottom: 0 }}
            className="overflow-hidden"
          >
             <div className={`backdrop-blur-md rounded-2xl flex items-center px-5 h-14 shadow-sm border ${
               isLightBackground 
                 ? 'bg-white/60 border-gray-200 text-gray-900' 
                 : 'bg-white/5 border-white/10 text-white'
             }`}>
                <Search size={18} className={isLightBackground ? 'text-gray-300 mr-3' : 'text-white/30 mr-3'} />
                <input 
                  type="text" 
                  placeholder="Search here..." 
                  className={`flex-1 font-sans font-medium text-sm outline-none bg-transparent placeholder:text-opacity-30 ${
                    isLightBackground ? 'text-gray-900 placeholder:text-gray-400' : 'text-white placeholder:text-white/30'
                  }`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories Horizontal Filter */}
      <div className="flex overflow-x-auto pb-6 scrollbar-hide space-x-3 -mx-6 px-6">
        <button
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.delete('category');
            setSearchParams(params);
          }}
          className={`px-6 h-12 rounded-2xl font-display font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${
            !categoryFilter 
              ? 'bg-accent text-white shadow-lg' 
              : isLightBackground
                ? 'bg-white/40 text-gray-400 border border-gray-200 shadow-sm'
                : 'bg-white/5 text-white/40 border border-white/10 shadow-sm'
          }`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => {
              const params = new URLSearchParams(searchParams);
              params.set('category', cat.id);
              setSearchParams(params);
            }}
            className={`px-6 h-12 rounded-2xl font-display font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all ${
              categoryFilter === cat.id 
                ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                : isLightBackground
                  ? 'bg-white/40 text-gray-400 border border-gray-200 shadow-sm'
                  : 'bg-white/5 text-white/40 border border-white/10 shadow-sm'
            }`}
          >
            {t(cat.label)}
          </button>
        ))}
      </div>

      {/* Hero List - Matching Mockup Screen 3 */}
      <div className="space-y-4">
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero, index) => (
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <HeroCard hero={hero} />
            </motion.div>
          ))
        ) : (
          <div className="text-center py-20">
             <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={32} className="text-gray-200" />
             </div>
             <p className="text-gray-400 font-bold">No heroes found</p>
          </div>
        )}
      </div>
    </div>
  );
}
