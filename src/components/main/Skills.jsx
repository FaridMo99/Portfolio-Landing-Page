import React from "react";
import Subsections from "../Subsections";
import SkillCard from "../SkillCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Skills() {
  return (
    <Subsections id="skills" title="Skills & Technologies">
      <div className="flex md:flex-row flex-col justify-around md:justify-between items-center w-full h-full">
        <SkillCard
          width="md:w-[25vw] w-full"
          title="Languages"
          skills={["HTML", "CSS", "Javascript"]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[25vw] w-full my-12 md:my-0"
          title="Frameworks/Librarys"
          skills={["React", "NextJs", "Tailwind", "Vitest", "Playwright"]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[25vw] w-full"
          title="Tools"
          skills={["Git", "Github", "npm", "Vite"]}
          icons={[ChevronLeft, ChevronRight]}
        />
      </div>
    </Subsections>
  );
}

export default Skills;
