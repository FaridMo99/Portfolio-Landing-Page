import React from "react";
import Subsections from "../Subsections";
import ProjectsCard from "../ProjectsCard";

function Projects() {
  return (
    <Subsections title="Projects" id="projects">
      <div className="flex md:flex-row flex-col justify-around md:justify-between items-center w-full h-full">
        <ProjectsCard
          title="friendly. /Social Media Single-Page-Application"
          text="friendly. is a Social Media App offering CRUD functionality aswell as Authentication and Login/Signup logic."
          image="/friendly-logo.png"
          githubLink="https://github.com/FaridMo99/SPA"
          technologies={["React", "React-Router", "Tailwind"]}
          width="w-full md:w-[25vw]"
          link=""
          secondImage="/friendly-logo-second.png"
        />
        <ProjectsCard
          title="Basketball-Statistics App with AI-Chatbot/SSG/ISR"
          text="This Project is a Basketball Statistics Webapp using NextJs for SSG and ISR aswell as a AI-Chatbot to get direct information."
          image="/self.jpeg"
          githubLink="https://github.com/FaridMo99/nextjs-sportsapp"
          technologies={["React", "NextJs", "Tailwind", "ShadCN"]}
          width="w-full md:w-[25vw] my-12 md:my-0"
          link=""
          secondImage=""
        />
        <ProjectsCard
          title="Unknown/SSR"
          text="Lorem ipsum dolor sit elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque."
          image="/self.jpeg"
          githubLink=""
          technologies={["React", "NextJs", "Tailwind"]}
          width="w-full md:w-[25vw]"
          link=""
          secondImage=""
        />
      </div>
    </Subsections>
  );
}

export default Projects;
