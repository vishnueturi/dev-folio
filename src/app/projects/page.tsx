import { Container } from "@/components/layout/Container";
import { FaReact, FaJs, FaServer, FaDatabase, FaTools, FaCode, FaVuejs } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { BiGitBranch } from 'react-icons/bi'; // For Unit Testing (git branch icon as a placeholder)
import ScrollReveal from "@/components/shared/ScrollReveal";

const projects = [
  {
    title: "OnBlick OnBoarding",
    period: "January 2023 - Present",
    description: [
      "Developed a comprehensive onboarding feature to streamline the employee onboarding process within the organization.",
      "Focused on enhancing user experience and efficiency by providing a structured, automated onboarding workflow for new hires.",
      "Integrated seamlessly with the existing Legacy HR application, ensuring smooth data exchange and continuity of operations, while maintaining scalability and performance.",
    ],
    tech: [
      { name: "Vue.js", icon: FaVuejs },
      { name: "Vuex", icon: FaVuejs },
      { name: "JavaScript", icon: FaJs },
      { name: "Legacy HR integration", icon: FaTools }, // Using a generic tools icon
    ],
    github: "https://github.com/yourusername/onboarding", // Placeholder - update with actual link
    demo: "#", // Placeholder - update with actual link
  },
  {
    title: "OnBlick HR Legacy",
    period: "September 2021 - December 2022",
    description: [
      "Developed a SaaS-based HR Immigration and Compliance solution, focusing on creating a stable and reliable application for handling HR operations.",
      "Designed to ensure smooth integration between frontend and backend services, providing a user-friendly experience for HR professionals.",
      "Developed and integrated RESTful APIs using .NET Core and implemented comprehensive unit tests.",
    ],
    tech: [
      { name: "Vue.js", icon: FaVuejs },
      { name: "Vuex", icon: FaVuejs },
      { name: "JavaScript", icon: FaJs },
      { name: ".NET Core", icon: SiDotnet }, // Using SiDotnet icon
      { name: "RESTful APIs", icon: FaServer },
      { name: "Unit Testing", icon: BiGitBranch }, // Using git branch icon as a placeholder
    ],
    github: "https://github.com/yourusername/hr-legacy", // Placeholder - update with actual link
    demo: "#", // Placeholder - update with actual link
  },
  {
    title: "OnBlick I9 Assist",
    period: "May 2020 - August 2021",
    description: [
      "Developed a SaaS-based application aimed at providing a scalable and user-friendly solution for users needing to manage I-9 compliance.",
      "Designed to streamline processes and automate data handling, ensuring real-time access to critical information for various user roles.",
      "Developed interactive UI pages using React.js and enhanced the application's ability to provide real-time access to user-specific data.",
    ],
    tech: [
      { name: "Vue.js", icon: FaVuejs },
      { name: "Vuex", icon: FaVuejs },
      { name: "JavaScript", icon: FaJs },
      { name: "Real-time Data", icon: FaDatabase }, // Using database icon
      { name: "Scalability", icon: FaTools }, // Using a generic tools icon
    ],
    github: "https://github.com/yourusername/i9-assist", // Placeholder - update with actual link
    demo: "#", // Placeholder - update with actual link
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
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div
                className="rounded-xl bg-foreground/5 p-6 text-left shadow-sm hover:shadow-lg transition duration-200 hover:shadow-primary-light border border-foreground/10"
              >
                <div>
                  <h2 className="font-semibold text-lg text-foreground mb-1">{project.title}</h2>
                  <span className="text-xs text-foreground/60 mb-2 block">{project.period}</span>
                  <ul className="list-disc list-inside text-foreground/70 text-base mb-3 space-y-1">
                    {project.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((techItem) => (
                      <span key={techItem.name} className="bg-primary-light/10 text-primary-light px-2 py-0.5 rounded text-xs flex items-center gap-1">
                        {<techItem.icon />} {techItem.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-2">
                  {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-primary-light">GitHub</a> */}
                  {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline hover:text-primary-light">Live Demo</a> */}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Container>
  );
}