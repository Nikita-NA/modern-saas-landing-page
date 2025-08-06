import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'enhanced';
  hover?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  variant = 'default',
  hover
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl shadow-xl',
        hover && 'transition-all duration-300 hover:bg-white/30 hover:shadow-2xl hover:-translate-y-1',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}