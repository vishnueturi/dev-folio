'use client';

import { Container } from '@/components/layout/Container';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { ScaleLoader } from 'react-spinners';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message);
        form.reset(); // Clear the form on success
      } else {
        toast.error(result.message || 'An unexpected error occurred.');
      }
    } catch (error) {
      toast.error('Failed to submit form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <section className="pt-16 pb-8 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
          Contact
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-6">
          You can use below super powers to say hi!
        </p>
        <div className="flex items-center gap-6 mb-8">
          <a
            href="mailto:eturivishnu@gmail.com"
            className="text-foreground/80 hover:text-red-500 transition-colors flex items-center gap-2 group"
            aria-label="Email me"
          >
            <SiGmail className="w-6 h-6" />
            <span className="text-foreground/80 group-hover:text-foreground">
              eturivishnu@gmail.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/vishnueturi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-[#0077b5] transition-colors flex items-center gap-2 group"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="text-foreground/80 group-hover:text-foreground">vishnueturi</span>
          </a>
        </div>
        <form
          className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 shadow-sm flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light disabled:opacity-70 disabled:cursor-not-allowed"
              placeholder="Your Name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light disabled:opacity-70 disabled:cursor-not-allowed"
              placeholder="you@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light disabled:opacity-70 disabled:cursor-not-allowed"
              placeholder="Your message..."
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary-light text-background font-semibold shadow hover:bg-primary-dark transition-colors border border-transparent flex items-center justify-center gap-2 min-w-32 h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <ScaleLoader
                  color="white"
                  height={20}
                  width={2}
                  margin={1}
                  aria-label="Sending message"
                />
                <span>Sending...</span>
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </section>
    </Container>
  );
}
