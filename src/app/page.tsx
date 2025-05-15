import { Container } from "@/components/layout/Container";
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    title: "github-rapo",
    description: "A GitHub repository example",
  },
  {
    title: "demo-app",
    description: "A demonstrationa application",
  },
  {
    title: "portfolio-website",
    description: "My personal portfolio site",
  },
];

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <ScrollReveal delay={0}>
        <section className="min-h-[60vh] flex flex-col justify-center items-start pt-16 pb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Hi, I'm Vishnu Eturi
          </h1>
          <p className="text-lg md:text-2xl text-foreground/70 mb-6 flex flex-wrap gap-x-2 gap-y-1 items-center">
            <span>Software Engineer</span>
            <span className="text-2xl leading-none">·</span>
            <span>Clean Code</span>
            <span className="text-2xl leading-none">·</span>
            <span>Modern UI</span>
            <span className="text-2xl leading-none">·</span>
            <span>Marvel + DC Fan</span>
            <span className="text-2xl leading-none">·</span>
            <span>Music Lover</span>
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg bg-foreground text-background font-semibold shadow hover:bg-foreground/80 transition-colors border border-transparent"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="px-6 py-3 rounded-lg border border-foreground/20 text-foreground font-semibold hover:bg-foreground/10 transition-colors"
            >
              About Me
            </a>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Projects Section */}
      <ScrollReveal delay={0.2}>
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-foreground">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl bg-foreground/5 p-6 text-left shadow-sm hover:shadow-lg transition-shadow border border-foreground/10"
              >
                <h3 className="font-semibold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-base">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </Container>
  );
}
