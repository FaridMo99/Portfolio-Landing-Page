import React from "react";
import Subsections from "../Subsections";
import ProjectsCard from "../ProjectsCard";

function Projects() {
  return (
    <Subsections title="Projects" id="projects">
      <div className="flex md:flex-row flex-col justify-around md:justify-between items-center w-full h-full">
        <ProjectsCard
          title="Social-Media-Clone/SPA"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque."
          image="../../../public/self.jpeg"
          githubLink="" 
          technologies={["React", "React-Router", "Tailwind"]}
          width="w-full md:w-[25vw]"
        />
        <ProjectsCard
          title="Basketball-API/AI-Wrapper/SSR"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque."
          image="../../../public/self.jpeg"
          githubLink=""
          technologies={["React", "NextJs", "Tailwind"]}
          width="w-full md:w-[25vw] my-12 md:my-0"
        />
        <ProjectsCard
          title="Finance-Dashboard/SSG"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque."
          image="../../../public/self.jpeg"
          githubLink=""
          technologies={["React", "NextJs", "Tailwind"]}
          width="w-full md:w-[25vw]"
        />
      </div>
    </Subsections>
  );
}

export default Projects;
