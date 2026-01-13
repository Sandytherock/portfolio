import React from 'react';
import { Card } from './Card';
import { Chip } from './Chip';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  impact?: string[];
  liveUrl?: string;
  playStoreUrl?: string;
  githubUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  features,
  impact,
  liveUrl,
  playStoreUrl,
  githubUrl
}) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {title}
        </h3>
        
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <Chip key={index} variant="primary">
              {item}
            </Chip>
          ))}
        </div>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1.5">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="text-sm text-slate-700 dark:text-slate-300 flex items-start"
              >
                <span className="text-primary-600 dark:text-primary-400 mr-2 mt-0.5 shrink-0">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Impact */}
        {impact && impact.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
              Impact:
            </h4>
            <div className="flex flex-wrap gap-2">
              {impact.map((item, index) => (
                <span 
                  key={index}
                  className="text-xs font-mono bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-400 px-2.5 py-1 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        {liveUrl && !liveUrl.startsWith('<') && (
          <Button variant="primary" size="sm" href={liveUrl}>
            View Live
          </Button>
        )}
        {playStoreUrl && !playStoreUrl.startsWith('<') && (
          <Button variant="primary" size="sm" href={playStoreUrl}>
            Play Store
          </Button>
        )}
        {githubUrl && !githubUrl.startsWith('<') && (
          <Button variant="secondary" size="sm" href={githubUrl}>
            GitHub
          </Button>
        )}
      </div>
    </Card>
  );
};
