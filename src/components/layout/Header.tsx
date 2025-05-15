'use client';

import { useState } from 'react';
import Link from 'next/link';
// import ThemeSwitcher from '../../../components/ThemeSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

const socialLinks = [
  { href: 'https://github.com/vishnueturi', label: 'GitHub', icon: '🐙' },
  { href: 'https://linkedin.com/in/your-linkedin', label: 'LinkedIn', icon: '🔗' },
  { href: 'mailto:eturivishnu@gmail.com', label: 'Email', icon: '✉️' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-foreground/10 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Vishnu Eturi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
          <Link href="/about" className="hover:text-primary-light transition-colors">About</Link>
          <Link href="/projects" className="hover:text-primary-light transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-primary-light transition-colors">Contact</Link>
          <a href="/resume.pdf" className="hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer">Resume</a>
          {/* <div className="flex items-center gap-2 ml-4">
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
          </div> */}
          <ThemeSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open menu</span>
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-primary-light transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="hover:text-primary-light transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/projects" className="hover:text-primary-light transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/contact" className="hover:text-primary-light transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="/resume.pdf" className="hover:text-primary-light transition-colors py-2" target="_blank" rel="noopener noreferrer">Resume</a>
            {/* <div className="flex items-center gap-3 mt-2">
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
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
}