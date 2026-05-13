import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { ArrowRight, User, Lock, Eye, Users } from 'lucide-react';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login();
    navigate('/');
  };

  const handleGoogleLogin = async () => {
    try {
      await login();
      navigate('/');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="min-h-screen bg-transparent flex flex-col items-center pt-12 px-8 pb-10 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full flex flex-col items-center relative z-10"
      >
        {/* App Logo/Icon */}
        <div className="mb-6 relative">
          <div className="w-28 h-28 bg-primary rounded-[2.5rem] shadow-xl flex items-center justify-center p-5 transform -rotate-3 overflow-hidden border-4 border-white/50">
             <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-white relative z-10">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v15H6.5a2.5 2.5 0 0 0-2.5 2.5Z" />
                <path d="M6.5 18H20" />
                <path d="M12 6v6" className="opacity-40" />
                <path d="M16 8v4" className="opacity-40" />
                <path d="M8 8v4" className="opacity-40" />
             </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-accent rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 border-2 border-white">
            <Users size={18} className="text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-serif font-black text-white mb-2 tracking-tight italic drop-shadow-md">
          Namma-Kathey
        </h1>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[1px] w-6 bg-white/20" />
          <p className="text-white/60 font-bold text-[10px] uppercase tracking-[0.2em]">{t('explore_stories')}</p>
          <div className="h-[1px] w-6 bg-white/20" />
        </div>

        {/* Login Form Layout */}
        <div className="w-full max-w-sm space-y-4 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-black text-white mb-1">Welcome!</h2>
            <p className="text-white/40 font-medium text-sm">Sign in with your Google account</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            className="w-full h-16 bg-white text-dark rounded-3xl font-serif font-black text-lg shadow-xl flex items-center justify-center gap-3 px-6"
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" referrerPolicy="no-referrer" />
            Continue with Google
          </motion.button>

          <div className="flex items-center gap-4 py-4 hidden">
            <div className="h-[1px] flex-1 bg-white/10" />
            <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">or</span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="relative opacity-50 pointer-events-none hidden">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-white/40">
              <User size={20} />
            </div>
            <input 
              disabled
              type="text" 
              placeholder="Your Name (Disabled)"
              className="w-full bg-white/5 rounded-3xl h-16 pl-14 pr-6 text-white font-medium outline-none border border-white/10"
              value={name}
            />
          </div>
        </div>

        <div className="w-full max-w-sm hidden">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
            className="w-full h-16 bg-white text-dark rounded-3xl font-serif font-black text-lg shadow-xl shadow-white/5 flex items-center justify-center gap-3"
          >
            Login <ArrowRight size={22} strokeWidth={2.5} />
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Decoration */}
      <div className="mt-auto pt-10 text-center w-full relative z-10 opacity-30">
        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
          Namma Kathey v1.0
        </p>
      </div>
    </div>
  );
}
