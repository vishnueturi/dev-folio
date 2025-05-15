import { Container } from "@/components/layout/Container";

export default function Contact() {
  return (
    <Container>
      <section className="pt-16 pb-8 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Contact</h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-6">
          Interested in working together, have a question, or just want to say hi? Reach out via email, LinkedIn, or the form below.
        </p>
        <div className="flex flex-col gap-2 mb-8">
          <a href="mailto:eturivishnu@gmail.com" className="underline hover:text-primary-light">eturivishnu@gmail.com</a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-light">LinkedIn</a>
        </div>
        <form className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 shadow-sm flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded border border-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary-light"
              placeholder="Your Name"
              disabled
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
              disabled
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
              disabled
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary-light text-background font-semibold shadow hover:bg-primary-dark transition-colors border border-transparent cursor-not-allowed"
            disabled
          >
            Send Message (Static Demo)
          </button>
        </form>
      </section>
    </Container>
  );
}