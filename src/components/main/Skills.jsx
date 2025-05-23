import React from "react";
import Subsections from "../Subsections";
import SkillCard from "../SkillCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Skills() {
  return (
    <Subsections
    id="skills"
      title="Skills & Technologies"
      height="screen"
      innerHeight="50vh"
    >
      <SkillCard
        width="w-[30vw]"
        title="Languages"
        skills={["HTML", "CSS", "Javascript"]}
        icons={[ChevronLeft,ChevronRight]}
      />
            <SkillCard
        width="w-[30vw]"
        title="Frameworks/Librarys"
        skills={["React", "NextJs", "Tailwind", "React-Router", "React-Query", "Framer-Motion", "ShadCN", "Vitest", "Playwright", "Zod", "React-Hook-Form","Zustand"]}
        icons={[ChevronLeft,ChevronRight]}
      />
        <SkillCard
        width="w-[30vw]"
        title="Tools"
        skills={["Git", "Github", "npm", "Vite"]}
        icons={[ChevronLeft,ChevronRight]}
      />
    </Subsections>
  );
}

export default Skills;
