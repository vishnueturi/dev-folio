'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="hover:text-primary-light transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-primary-light transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-primary-light transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                Twitter
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-foreground/80">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <a
              href="mailto:hello@example.com"
              className="text-primary-light hover:text-primary-dark transition-colors"
            >
              hello@example.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-foreground/10 text-center text-foreground/60">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}