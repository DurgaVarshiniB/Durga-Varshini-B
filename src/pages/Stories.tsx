import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { heroes, stories } from '../data/data';
import HeroCard from '../components/HeroCard';
import { BookOpen } from 'lucide-react';

export default function Stories() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Only heroes who have stories defined in the data
  const heroesWithStories = heroes.filter(hero => 
    stories.some(story => story.heroId === hero.id)
  );

  return (
    <div className="pb-32 pt-10 px-6 min-h-screen bg-transparent">
      <header className="text-center mb-10">
        <div className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center mx-auto shadow-xl shadow-accent/20 mb-6 rotate-3 border-4 border-white/80">
          <BookOpen size={40} className="text-white" />
        </div>
        <h1 className="text-4xl font-display font-black tracking-widest uppercase text-dark">Stories</h1>
        <p className="text-gray-600 font-black text-[10px] uppercase tracking-[0.3em] mt-3">
          The Magic of Karnataka
        </p>
      </header>

      <div className="grid gap-6">
        {heroesWithStories.length > 0 ? (
          heroesWithStories.map(hero => (
            <div key={hero.id}>
              <HeroCard hero={hero} />
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-300">
            <BookOpen size={48} className="mx-auto mb-4" />
            <p className="font-display font-bold text-gray-600">More stories coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
