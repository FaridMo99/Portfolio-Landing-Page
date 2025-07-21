import Subsections from "../Subsections";
import ProjectsCard from "../ProjectsCard";

export type Projects = {
  title: string;
  text: string;
  image: string;
  secondImage: string;
  alt: string;
  githubLink: string;
  link: string;
  technologies: string[];
};

const projects: Projects[] = [
  {
    title: "friendly. /Social Media Single-Page-Application",
    text: "friendly. is a Social Media App offering CRUD functionality aswell as Authentication and Login/Signup logic.",
    image: "/friendly-logo.png",
    githubLink: "https://github.com/FaridMo99/SPA",
    technologies: ["React", "React-Router", "Tailwind"],
    link: "https://spa-cyan-one.vercel.app/login",
    secondImage: "/friendly-logo-second.png",
    alt: "friendly logo",
  },
  {
    title: "HoopTracker/ Basketball Statistics with AI-Chatbot",
    text: "HoopTracker is a Basketball Statistics Webapp using NextJs for SSG and ISR.",
    image: "/hooptracker-fullimage.jpg",
    githubLink: "https://github.com/FaridMo99/nextjs-sportsapp",
    technologies: ["React", "NextJs", "Tailwind", "ShadCN"],
    link: "https://nextjs-sportsapp.vercel.app/",
    secondImage: "/hooptrackerSecond.png",
    alt: "Hooptracker logo",
  },
];

function Projects() {
  return (
    <Subsections title="Projects" id="projects">
      <div className="flex md:flex-row flex-col justify-around md:justify-around items-center w-full h-full">
        {projects.map((project) => (
          <ProjectsCard
            title={project.title}
            text={project.text}
            image={project.image}
            githubLink={project.githubLink}
            link={project.link}
            secondImage={project.secondImage}
            alt={project.alt}
            technologies={project.technologies}
          />
        ))}
      </div>
    </Subsections>
  );
}

export default Projects;
