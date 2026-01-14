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
    title: "... | Fullstack E-Commerce-App",
    text: `... is a Fullstack Application using NextJs on the Frontend and Express on the Backend. 
    For end-to-end shared behavior it uses a Monorepo Architecture through npm workspaces.
    The App uses JWT-Tokens as well as OAuth for authentication.
    Public Form Inputs are bot protected through rate-limiting and Cloudflare Turnstile.
    Authenticated User can add Products to the shopping cart, review, bookmark, sort, filter,search these and create orders which
    get verified through stripe and stripe webhooks.
    Admins have Access to a custom Admin Dashboard with analytics, check user orders and create/delete/update Products with Images
    that get uploaded to the Cloud(Cloudinary).
    Multiple Currencies are supported through Maxmind IP Mapping to a Geolocation.
    Cronjobs invalidate Caches and cleanup the Database regularly.
    Docker is being used to Bundle the Application to allow it to run everywhere without problems.
    Finally there is Continous Integration and Continous Deployment (CI/CD) through Github Actions.`,
    image: "/eCommerceAppLogo.png",
    githubLink: "https://github.com/FaridMo99/E-Commerce-App",
    technologies: [
      "Typescript",
      "React",
      "NextJs",
      "TailwindCSS",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "PrismaORM",
      "Redis",
      "Stripe",
      "Docker",
      "npm workspaces",
      "Github Actions",
      "Vitest",
      "Cronjob",
      "Cloudinary",
      "Multer",
      "OAuth",
      "JWT",
      "Github Actions",
      "Mailjet",
    ],
    link: "",
    secondImage: "/eCommerceAppFullImage.png",
    alt: "e commerce app logo",
  },
  
  {
    title: "friendly. | Social Media Single-Page-Application",
    text: `friendly. is a Fullstack Social Media Application that provides full CRUD (Create, Read, Update, Delete)
    functionality for Posts and User Data. Authentication is handled securely using PassportJs for
    Session-based Authentication, with session data managed efficiently in-memory via Redis caching.
    Data persistence is given through PostgreSQL and managed with the PrismaORM.
    Key features include a real-time Chat, file uploads and Klipy API for media content, and an Email based User
    verification System to ensure Account Integrity.`,
    image: "/friendly-logo.png",
    githubLink: "https://github.com/FaridMo99/SPA",
    technologies: [
      "Typescript",
      "React",
      "TailwindCSS",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "PrismaORM",
      "Redis",
      "Cloudinary",
      "Cronjob",
      "Multer",
      "Zustand",
      "Vite",
      "Socket.io",
      "PassportJs",
      "Mailjet",
      "React-Hook-Form",
      "Zod",
      "Tanstack-Query",
    ],
    link: "https://friendly.lat",
    secondImage: "/friendly-logo-second.png",
    alt: "friendly logo",
  },

  {
    title: "HoopTracker | Basketball Statistics with AI-Chatbot",
    text: `HoopTracker is a Basketball Statistics Webapp using NextJs for SSG and ISR.
    It features a AI-Chatbot through the OpenAI API and the Basketball Data is provided through the SportsData.io API`,
    image: "/hooptracker-fullimage.jpg",
    githubLink: "https://github.com/FaridMo99/nextjs-sportsapp",
    technologies: ["Typescript", "React", "NextJs", "TailwindCSS", "ShadCN"],
    link: "https://nextjs-sportsapp-kukg6b0ko-famohs-projects.vercel.app",
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
