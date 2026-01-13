import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    primary: 'bg-primary-100 text-primary-700 dark:bg-primary-950/50 dark:text-primary-400'
  };

  return (
    <span 
      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
