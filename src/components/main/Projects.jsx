import React from 'react'
import Subsections from "../Subsections"
import ProjectsCard from '../ProjectsCard'

function Projects() {
  return (
    <Subsections title="Projects" height="100vh" innerHeight="50vh" id="projects">
        <ProjectsCard title="Social-Media-Clone/SPA" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque." image="../../../public/abstract-art-background-dark-gray-600nw-2115572723.jpg.webp" githubLink="" technologies={["React", "React-Router", "Tailwind"]} width="w-[30vw]"/>
        <ProjectsCard title="Basketball-API/AI-Wrapper/SSR" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque." image="../../../public/abstract-art-background-dark-gray-600nw-2115572723.jpg.webp" githubLink="" technologies={["React", "NextJs", "Tailwind"]} width="w-[30vw]"/>
        <ProjectsCard title="Finance-Dashboard/SSG" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fuga cupiditate recusandae dolorum porro vel, eaque tempore corporis modi commodi, repudiandae mollitia quam eos corrupti iure aperiam maxime explicabo itaque." image="../../../public/abstract-art-background-dark-gray-600nw-2115572723.jpg.webp" githubLink="" technologies={["React", "NextJs", "Tailwind"]} width="w-[30vw]"/>
    </Subsections>
  )
}

export default Projects