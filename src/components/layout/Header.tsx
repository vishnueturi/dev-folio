'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ScaleLoader } from 'react-spinners';
import ThemeSwitcher from '../ThemeSwitcher';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDownloading(true);

    // Simulate download delay
    const link = document.createElement('a');
    link.href = '/Vishnu_swe.pdf'; // Updated to use Vercel's public folder
    link.download = 'Vishnu_SWE_Resume.pdf';
    link.target = '_blank';

    // Add a small delay to show the loader
    setTimeout(() => {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up or at the top
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [lastScrollY]);

  const renderResumeLink = (isMobile = false) => (
    <a
      href="https://example.com/path-to-your-cloud-resume.pdf" // Replace with your cloud file URL
      className={`${isMobile ? 'py-2' : 'text-sm'} relative group hover:text-primary-light transition-colors flex items-center gap-1 min-w-[70px]`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleResumeDownload}
    >
      <span className={isDownloading ? 'invisible' : ''}>Resume</span>
      <div
        className={`absolute ${isMobile ? 'left-8' : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'} ${!isDownloading ? 'hidden' : ''}`}
      >
        <ScaleLoader
          color="currentColor"
          height={12}
          width={2}
          margin={1}
          loading={isDownloading}
        />
      </div>
    </a>
  );

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] max-w-md bg-background/80 backdrop-blur-sm rounded-xl shadow-lg border border-foreground/10 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}
    >
      <div className="container mx-auto px-4 h-14 flex items-center justify-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-sm relative group hover:text-primary-light transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm relative group hover:text-primary-light transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm relative group hover:text-primary-light transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm relative group hover:text-primary-light transition-colors"
          >
            Contact
          </Link>
          {renderResumeLink()}
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
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[70px] left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] max-w-md bg-background/95 backdrop-blur-sm border border-foreground/10 rounded-xl shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            className="relative group hover:text-primary-light transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="relative group hover:text-primary-light transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="relative group hover:text-primary-light transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="relative group hover:text-primary-light transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          {renderResumeLink(true)}
        </nav>
      </div>
    </header>
  );
}
