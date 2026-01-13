import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  description,
  isLast = false
}) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-2 w-3 h-3 bg-primary-600 dark:bg-primary-500 rounded-full ring-4 ring-primary-100 dark:ring-primary-950/50"></div>
      {!isLast && (
        <div className="absolute left-1.5 top-5 w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>
      )}
      
      {/* Content */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium">
              {subtitle}
            </p>
          </div>
          <span className="text-sm font-mono text-slate-600 dark:text-slate-400 shrink-0">
            {period}
          </span>
        </div>
        
        {description && description.length > 0 && (
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li 
                key={index} 
                className="text-slate-700 dark:text-slate-300 text-sm flex items-start"
              >
                <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1 shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
