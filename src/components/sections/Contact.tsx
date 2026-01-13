import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { profile } from '../../data/profile';

export const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: '📧',
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`
    },
    {
      icon: '📱',
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profile.linkedin
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'View GitHub Profile',
      href: profile.github
    }
  ];

  const handleContactClick = () => {
    window.location.href = `mailto:${profile.email}?subject=Portfolio Inquiry`;
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950">
      <Container>
        <SectionHeader 
          title="Get In Touch"
          subtitle="Let's connect and build something amazing together"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactItems.map((item, index) => (
              <Card key={index} hover>
                <a 
                  href={item.href.startsWith('<') ? '#' : item.href}
                  target={item.href.startsWith('http') && !item.href.startsWith('<') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') && !item.href.startsWith('<') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (item.href.startsWith('<')) {
                      e.preventDefault();
                    }
                  }}
                  className="flex items-center group"
                >
                  <div className="shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-950/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                      {item.label}
                    </p>
                    <p className="text-slate-900 dark:text-slate-100 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="primary" size="lg" onClick={handleContactClick}>
              Send me an email
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
