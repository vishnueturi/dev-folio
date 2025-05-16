'use client';

import { useTheme } from 'next-themes';
import { SiNextdotjs, SiTailwindcss, SiGithub, SiLinkedin } from 'react-icons/si';
import { FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  hover: string;
}

interface TechStackItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  hover: string;
}

const currentYear = new Date().getFullYear();

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/vishnueturi',
    icon: <SiGithub className="w-4 h-4" />,
    hover: 'hover:text-gray-700 dark:hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vishnueturi',
    icon: <SiLinkedin className="w-4 h-4" />,
    hover: 'hover:text-[#0077b5] dark:hover:text-[#70b5e7]',
  },
  {
    name: 'Email',
    href: 'mailto:eturivishnu@gmail.com',
    icon: <FaEnvelope className="w-4 h-4" />,
    hover: 'hover:text-red-500 dark:hover:text-red-400',
  },
];

export function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  const techStack: TechStackItem[] = [
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      icon: <SiNextdotjs className="w-4 h-4" />,
      hover: 'hover:text-gray-800 dark:hover:text-gray-200',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      icon: <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
      hover: 'hover:text-[#06B6D4] dark:hover:text-[#5ee4ff]',
    },
    {
      name: 'Cursor',
      href: 'https://www.cursor.sh/',
      icon: (
        <img 
          src="/cursor_tool_icon.svg" 
          alt="Cursor" 
          className={`w-4 h-4 ${mounted && isDark ? 'invert' : ''}`}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWN1cnNvciI+PHBhdGggZD0iTTggMTRhMiAyIDAgMSAwIDAtNCAwIDIgMiAwIDAgMCA0IDBaIi8+PHBhdGggZD0iTTguNCAxNC42YzIuMS0xLjkgNC4yLTMuNiA2LjUtNS4xYTEgMSAwIDAgMCAwLTEuN2MtLjMtLjItLjctLjItMS4xLS4xIi8+PHBhdGggZD0iTTkuMSAxNy4xYy45LS45IDEuOC0xLjkgMi42LTIuOS43LS4xIDEuMy0uMSAxLjkuMS4yLjIuMy41LjMuOGMtLjEuNi0uOSAxLjItMi4xIDIuNCIvPjwvc3ZnPg==';
          }}
        />
      ),
      hover: 'hover:text-purple-600 dark:hover:text-purple-400',
    },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background/80 backdrop-blur-sm mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          {/* <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-foreground/60 transition-colors ${link.hover}`}
                aria-label={link.name}
              >
                {link.icon}
                <span className="text-sm font-medium">{link.name}</span>
              </a>
            ))}
          </div> */}

          {/* <div className="flex items-center gap-1 text-sm text-foreground/60">
            <span>© {currentYear} All rights reserved</span>
          </div> */}

          <div className="flex items-center gap-1 text-sm">
            <span className="text-foreground/60">Built with</span>
            <div className="flex items-center gap-1">
              {techStack.map((tech, index) => (
                <span key={tech.name} className="flex items-center">
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-foreground/60 transition-colors ${tech.hover}`}
                    aria-label={tech.name}
                  >
                    {tech.icon}
                    <span className="font-medium">{tech.name}</span>
                  </a>
                  {index < techStack.length - 1 && <span className="mx-1">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
