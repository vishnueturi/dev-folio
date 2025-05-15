import { Container } from "@/components/layout/Container";

const projects = [
  {
    title: "OnBlick OnBoarding",
    period: "Jan 2023 - Present",
    description:
      "Comprehensive onboarding feature to streamline the employee onboarding process. Real-time data, integration with legacy HR, and rapid deployment.",
    tech: ["React.js", "Redux", "JavaScript"],
    github: "https://github.com/yourusername/onboarding",
    demo: "#",
  },
  {
    title: "OnBlick HR Legacy",
    period: "Sep 2021 - Dec 2022",
    description:
      "SaaS-based HR Immigration and Compliance solution. RESTful APIs, robust unit testing, and responsive frontend.",
    tech: ["React.js", "Redux", "JavaScript", ".NET Core"],
    github: "https://github.com/yourusername/hr-legacy",
    demo: "#",
  },
  {
    title: "OnBlick I9 Assist",
    period: "May 2020 - Aug 2021",
    description:
      "SaaS application for I-9 compliance. Real-time data, scalable UI, and user-centric features.",
    tech: ["React.js", "Redux", "JavaScript"],
    github: "https://github.com/yourusername/i9-assist",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <Container>
      <section className="pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">Projects</h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl">
          Here are some of the key projects I have worked on, focusing on scalable, high-performance, and user-friendly web applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl bg-foreground/5 p-6 text-left shadow-sm hover:shadow-lg transition-shadow border border-foreground/10 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-semibold text-lg text-foreground mb-1">{project.title}</h2>
                <span className="text-xs text-foreground/60 mb-2 block">{project.period}</span>
                <p className="text-foreground/70 text-base mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-primary-light/10 text-primary-light px-2 py-0.5 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-primary-light">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-primary-light">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}