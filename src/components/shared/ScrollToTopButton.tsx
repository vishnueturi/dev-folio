'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-foreground/10 text-foreground/60 shadow-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ⬆️
    </button>
  );
}
