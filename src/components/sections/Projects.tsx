import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/profile';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-slate-900">
      <Container>
        <SectionHeader 
          title="Featured Projects"
          subtitle="A showcase of my work building production-ready applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              features={project.features}
              impact={project.impact}
              liveUrl={project.liveUrl}
              playStoreUrl={project.playStoreUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
