import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hover = false 
}) => {
  const hoverStyles = hover 
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200' 
    : '';

  return (
    <div 
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
