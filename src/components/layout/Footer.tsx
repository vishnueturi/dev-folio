'use client';

import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com/vishnueturi', label: 'GitHub', icon: '🐙' },
  { href: 'https://linkedin.com/in/your-linkedin', label: 'LinkedIn', icon: '🔗' },
  { href: 'mailto:eturivishnu@gmail.com', label: 'Email', icon: '✉️' },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-lg hover:text-primary-light transition-colors"
            >
              <span aria-hidden>{link.icon}</span>
            </a>
          ))}
        </div>
        <div className="text-center text-foreground/60 text-sm">
          © {new Date().getFullYear()} Vishnu Vardhan Eturi. All rights reserved.
        </div>
        <div className="text-center text-foreground/60 text-sm">
          Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-light">Next.js</a> &amp; <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-light">Tailwind CSS</a>
        </div>
      </div>
    </footer>
  );
}