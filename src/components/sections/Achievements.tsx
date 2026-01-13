import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { achievements, interests } from '../../data/profile';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-neutral-50 dark:bg-slate-900">
      <Container>
        <SectionHeader 
          title="Certifications & Achievements"
          subtitle="Recognition and continuous learning"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} hover>
              <div className="flex items-start">
                <div className="shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-950/50 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-primary-600 dark:text-primary-400 text-xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    {achievement.title}
                  </h3>
                  {achievement.issuer && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {achievement.issuer}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interests Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-8">
            Beyond Code
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {interests.map((interest, index) => (
              <Card key={index} hover>
                {interest.link ? (
                  <a 
                    href={interest.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center group"
                  >
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {interest.title} 🔗
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">
                      {interest.description}
                    </p>
                    {interest.stats && (
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                        {interest.stats}
                      </p>
                    )}
                  </a>
                ) : (
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">
                      {interest.description}
                    </p>
                    {interest.stats && (
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                        {interest.stats}
                      </p>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
