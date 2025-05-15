import { Container } from "@/components/layout/Container";
import { FaVuejs, FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaDatabase, FaServer, FaTools, FaCode } from 'react-icons/fa';
import { SiRedux, SiJest, SiWebpack, SiChartdotjs, SiTestinglibrary, SiMongodb } from 'react-icons/si';

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "Vue.js", icon: FaVuejs },
      { name: "React.js", icon: FaReact },
    //   { name: "Next.js", icon: FaNextjs },
    //   { name: "Redux", icon: SiRedux },
      { name: "Vuex", icon: FaVuejs },
      { name: "JavaScript (ES6+)", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
    ]
  },
  {
    category: "Backend",
    techs: [
      { name: ".NET Core", icon: FaCode },
      { name: "RESTful API development", icon: FaServer },
      { name: "MongoDB", icon: SiMongodb },
    ]
  },
  {
    category: "Testing",
    techs: [
      { name: "Jest", icon: SiJest },
      { name: "vue-test-utils", icon: SiTestinglibrary },
    //   { name: "React Testing Library", icon: SiTestinglibrary },
    ]
  },
  {
    category: "Tools & Concepts",
    techs: [
      { name: "Webpack", icon: SiWebpack },
      { name: "Chart.js", icon: SiChartdotjs },
      { name: "Responsive Design", icon: FaTools },
      { name: "Accessibility", icon: FaTools },
      { name: "Agile Methodologies", icon: FaTools },
    ]
  }
];

const experience = [
  {
    company: "RIG Enterprise Application",
    role: "Software Engineer",
    location: "Hyderabad",
    period: "September 2021 - Present",
    website: "https://www.onblick.com/",
    details: [
      "Led the upgrade of a complex front-end application from Vue 2 to Vue 3, improving performance, and maintainability, and leveraging the latest Vue 3 features for enhanced user experiences.",
      "Implemented a new feature from scratch using Vue.js, working closely with stakeholders to deliver functionality that met user needs and enhanced the overall platform.",
      "Designed and implemented an interactive dashboard for user reports using Chart.js, enabling real-time data visualization and analysis for improved decision-making capabilities.",
      "Developed a reusable UI Component Library with Vue.js, consisting of common components shared across multiple applications, resulting in consistent UI and faster development cycles.",
      "Deepened understanding of Webpack to optimize bundling, reduce application load times, and improve the overall performance of the front-end application.",
    ],
  },
  {
    company: "RIG Enterprise Application",
    role: "Software Trainee",
    location: "Hyderbad",
    period: "April 2020 - August 2021",
    website: "https://www.onblick.com/",
    details: [
      "Developed user interface pages from scratch using Vue.js, creating a robust and scalable product that was successfully deployed.",
      "Implemented unit testing for the front-end application using Jest and vue-test-utils, ensuring code quality and reliability.",
      "Contributed to backend development using the .NET Core framework, building APIs and server-side logic.",
      "Gained foundational knowledge in MongoDB, assisting in basic database operations and understanding data modeling concepts.",
    ],
  },
];

export default function About() {
  return (
    <Container>
      <section className="pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">About Me</h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-3xl">
          Developer with 5+ years of experience in building scalable front-end applications using Vue.js, .NET Core. Expertise in creating responsive, high-performance web applications using JavaScript, HTML, and CSS, with a strong understanding of accessibility, usability principles, and cross-browser compatibility. Proven ability to design and deliver features in an agile environment, with hands-on experience in working across both front-end and back-end technologies.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2">Skills & Technologies</h2>
          <div className="flex flex-col gap-4">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{skillCategory.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.techs.map((tech) => (
                    <span key={tech.name} className="bg-primary-light/10 text-primary-light px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      {<tech.icon />} {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Experience</h2>
          <div className="flex flex-col gap-8">
            {experience.map((exp) => (
              <div key={exp.role + exp.period} className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 shadow-sm transition duration-200 hover:shadow-lg hover:shadow-primary-light">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <span className="font-semibold text-lg text-foreground">{exp.role}</span>
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
        <div className="mb-8 mt-8">
          <h2 className="text-xl font-bold text-foreground mb-2">Education</h2>
          <div className="bg-foreground/5 rounded-xl p-6 border border-foreground/10 shadow-sm transition duration-200 hover:shadow-lg hover:shadow-primary-light">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="font-semibold text-lg text-foreground">Bachelor of Technology</span>
                <span className="text-foreground/60">in</span>
                <span className="font-medium text-foreground">Computer Science</span>
              </div>
              <span className="text-sm text-foreground/60">July 2015 - May 2019 | Warangal</span>
            </div>
            <div className="text-foreground/80 text-base mt-2">
              Vaagdevi Engineering College
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}