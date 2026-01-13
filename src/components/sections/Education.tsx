import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineItem } from '../ui/Timeline';
import { education } from '../../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader 
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.degree}
              subtitle={edu.institution}
              period={`${edu.period} • ${edu.score}`}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
