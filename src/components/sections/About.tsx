import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { profile } from '../../data/profile';

export const About: React.FC = () => {
  const strengths = [
    "Production-ready mobile app development with React Native",
    "Full-stack web development using MERN stack",
    "Secure authentication and authorization implementations",
    "Performance optimization and scalability focus",
    "Clean UI/UX with modern design principles",
    "Strong foundation in Data Structures and Algorithms"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader 
          title="About Me"
          subtitle="A passionate developer focused on creating impactful solutions"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Summary */}
          <Card>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Overview
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {profile.summary}
            </p>
          </Card>

          {/* Key Strengths */}
          <Card>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Key Strengths
            </h3>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li 
                  key={index}
                  className="text-slate-700 dark:text-slate-300 flex items-start"
                >
                  <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 shrink-0">▸</span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
};
