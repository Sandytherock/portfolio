import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Chip } from '../ui/Chip';
import { Card } from '../ui/Card';
import { skills } from '../../data/profile';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-50 dark:bg-slate-900">
      <Container>
        <SectionHeader 
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={index}>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <Chip key={skillIndex}>
                    {skill}
                  </Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
