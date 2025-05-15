'use client';

import { Container } from "@/components/layout/Container";
import { useState } from 'react';
import toast from 'react-hot-toast';

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
      console.error('Form submission error:', error);
      toast.error('Failed to submit form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <section className="pt-16 pb-8 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Contact</h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-6">
          Interested in working together, have a question, or just want to say hi? Reach out via email, LinkedIn, or the form below.
        </p>
        <div className="flex items-center gap-4 mb-8">
          <a href="mailto:eturivishnu@gmail.com" className="underline hover:text-primary-light flex items-center gap-2">
            📧 eturivishnu@gmail.com
          </a>
          <a href="https://linkedin.com/in/vishnueturi" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-light flex items-center gap-2">
            🔗 LinkedIn
          </a>
        </div>
        <form className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 shadow-sm flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary-light text-background font-semibold shadow hover:bg-primary-dark transition-colors border border-transparent"
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </Container>
  );
}