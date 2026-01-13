import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { profile } from '../../data/profile';

export const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Soumya_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsScroll = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 sm:pt-20 pb-16">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            {profile.name}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
            {profile.title}
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="primary" size="lg" onClick={handleProjectsScroll}>
              View Projects
            </Button>
            <Button variant="secondary" size="lg" onClick={handleDownloadResume}>
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" onClick={handleContactScroll}>
              Get in Touch
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-3">
            {profile.highlights.map((highlight, index) => (
              <Chip key={index} variant="primary">
                {highlight}
              </Chip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
