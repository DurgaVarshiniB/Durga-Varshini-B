import React from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { heroes } from '../data/data';
import HeroCard from '../components/HeroCard';
import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Favorites() {
  const { favorites } = useProgress();
  const { t } = useLanguage();
  const favoriteHeroes = heroes.filter(h => favorites.includes(h.id));

  return (
    <div className="pb-32 pt-10 min-h-screen bg-transparent">
      <div className="px-6 mb-8">
        <h1 className="text-3xl font-serif font-black text-dark mb-2">Your Favorites</h1>
        <p className="text-gray-600 font-medium">Stories you loved the most</p>
      </div>

      <div className="px-6 space-y-6">
        {favoriteHeroes.length > 0 ? (
          favoriteHeroes.map(hero => (
            <HeroCard key={hero.id} hero={hero} variant="list" />
          ))
        ) : (
          <div className="py-20 flex flex-col items-center justify-center text-center text-gray-300">
            <Heart size={64} className="mb-4" />
            <p className="text-xl font-bold uppercase tracking-widest text-gray-600">No favorites yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
