import React from 'react';
import { useNavigate } from 'react-router-dom';
import { District } from '../data/data';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export default function DistrictCard({ district }: { district: District }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative aspect-square rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border-4 border-white group"
      onClick={() => navigate(`/heroes?district=${district.id}`)}
    >
      <img 
        src={district.image} 
        alt={t(district.name)} 
        className="w-full h-full object-cover transition-transform group-hover:scale-110" 
      />
      <div className="absolute inset-x-3 bottom-4 text-center">
        <span className="bg-white px-4 py-2 rounded-2xl text-dark font-display font-black text-[10px] tracking-widest uppercase shadow-lg block">
          {t(district.name)}
        </span>
      </div>
    </motion.div>
  );
}
