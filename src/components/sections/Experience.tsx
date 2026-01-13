import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { TimelineItem } from '../ui/Timeline';
import { experiences } from '../../data/profile';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader 
          title="Experience"
          subtitle="Professional journey and internships"
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
