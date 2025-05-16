'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Ensure the component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 15 }}
    >
      {theme === 'dark' || resolvedTheme === 'dark' ? (
        <motion.div
          key="dark-icon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
        >
          <MdDarkMode size={24} />
        </motion.div>
      ) : (
        <motion.div
          key="light-icon"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 90 }}
        >
          <MdLightMode size={24} />
        </motion.div>
      )}
    </motion.button>
  );
}
