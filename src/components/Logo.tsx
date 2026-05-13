import React from 'react';
import { BookOpen } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5 rounded-lg',
    md: 'w-12 h-12 p-2 rounded-xl border-2',
    lg: 'w-20 h-20 p-3 rounded-2xl border-4',
  };

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 40,
  };

  return (
    <div className={`bg-secondary flex items-center justify-center border-white kid-shadow-secondary ${sizeClasses[size]} ${className}`}>
      <BookOpen size={iconSizes[size]} className="text-primary fill-primary/10" />
    </div>
  );
}
