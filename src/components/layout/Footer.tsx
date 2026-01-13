import React from 'react';
import { Container } from '../ui/Container';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <Container>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{profile.name}</h3>
            <p className="text-sm text-slate-400 mb-3">
              Software Engineer specializing in React, React Native, and MERN stack development.
            </p>
            <p className="text-sm text-slate-400">
              Building production-ready applications with clean code and user-first design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors focus-ring rounded px-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors focus-ring rounded px-1"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${profile.phone}`}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors focus-ring rounded px-1"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a 
                  href={profile.linkedin.startsWith('<') ? '#' : profile.linkedin}
                  target={!profile.linkedin.startsWith('<') ? "_blank" : undefined}
                  rel={!profile.linkedin.startsWith('<') ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (profile.linkedin.startsWith('<')) {
                      e.preventDefault();
                    }
                  }}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors focus-ring rounded px-1"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href={profile.github.startsWith('<') ? '#' : profile.github}
                  target={!profile.github.startsWith('<') ? "_blank" : undefined}
                  rel={!profile.github.startsWith('<') ? "noopener noreferrer" : undefined}
                  onClick={(e) => {
                    if (profile.github.startsWith('<')) {
                      e.preventDefault();
                    }
                  }}
                  className="text-sm text-slate-400 hover:text-primary-400 transition-colors focus-ring rounded px-1"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};
