import Subsections from "../Subsections";
import SkillCard from "../SkillCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Skills() {
  return (
    <Subsections id="skills" title="Skills & Technologies">
      <div className="flex md:flex-row md:items-start flex-col justify-around md:justify-between items-center w-full h-full">
        <SkillCard
          width="md:w-[20vw] w-full"
          title="Frontend"
          skills={[
            "React",
            "NextJs",
            "React-Query",
            "Zustand",
            "React-Router",
            "TailwindCSS",
            "Vite",
            "ShadCN",
            "Zod",
          ]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[20vw] w-full my-12 md:my-0"
          title="Backend"
          skills={[
            "NodeJs",
            "Express",
            "Typescript",
            "Auth(JWT/Session)",
            "Redis(Cache only)",
          ]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[20vw] w-full mb-12"
          title="Database"
          skills={["PostgreSQL", "SQL", "PrismaORM"]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[20vw] w-full"
          title="DevOps/Tools"
          skills={["Docker", "Github Actions", "NGINX", "Git", "Github", "Github Actions", "Jest/Vitest"]}
          icons={[ChevronLeft, ChevronRight]}
        />
      </div>
    </Subsections>
  );
}

export default Skills;
