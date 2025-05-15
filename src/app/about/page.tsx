import { Container } from "@/components/layout/Container";

const skills = [
  "React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Chart.js", ".NET Core", "MongoDB", "Jest", "Responsive Design", "Accessibility", "Agile", "Webpack"
];

const experience = [
  {
    company: "RIG Enterprise Application",
    role: "Software Engineer",
    location: "Hyderabad",
    period: "Sep 2021 - Present",
    website: "https://www.onblick.com/",
    details: [
      "Led the upgrade of a complex front-end application, leveraging React.js to improve performance, maintainability, and user experience.",
      "Implemented new features from scratch using React.js and Redux, focusing on accessibility and usability principles.",
      "Designed and implemented an interactive dashboard for user reports using Chart.js and React.js.",
      "Developed a reusable UI Component Library with React.js, maintaining consistent UI standards across multiple applications.",
      "Optimized front-end performance through a deep understanding of Webpack, reducing bundle sizes and improving load time."
    ]
  },
  {
    company: "RIG Enterprise Application",
    role: "Software Trainee",
    location: "Hyderabad",
    period: "Apr 2020 - Aug 2021",
    website: "https://www.onblick.com/",
    details: [
      "Developed user interface pages from scratch using React.js, Redux, JavaScript, HTML, and CSS.",
      "Implemented state management with Redux for efficient handling of complex application state.",
      "Implemented unit testing for front-end components using Jest.",
      "Contributed to backend development using .NET Core, building APIs and server-side logic.",
      "Gained foundational knowledge in MongoDB, assisting with basic database operations."
    ]
  }
];

export default function About() {
  return (
    <Container>
      <section className="pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">About Me</h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-3xl">
          I am a skilled Front-End Developer with nearly 5 years of experience in building scalable, high-performance web applications using React.js and other modern frameworks. I focus on accessibility, usability, and cross-browser compatibility, and thrive in agile environments delivering business value through clean code and modern UI.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="bg-primary-light/10 text-primary-light px-3 py-1 rounded-full text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Experience</h2>
          <div className="flex flex-col gap-8">
            {experience.map((exp) => (
              <div key={exp.role + exp.period} className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-lg text-white">{exp.role}</span>
                    <span className="text-foreground/60">@</span>
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="text-primary-light underline font-medium">{exp.company}</a>
                  </div>
                  <span className="text-sm text-foreground/60">{exp.period} | {exp.location}</span>
                </div>
                <ul className="list-disc list-inside text-foreground/80 text-base mt-2 space-y-1">
                  {exp.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}