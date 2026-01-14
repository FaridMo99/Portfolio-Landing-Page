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
            "React / Next.js",
            "TypeScript",
            "Tanstack Query",
            "Zustand",
            "TailwindCSS / ShadCN",
            "Framer Motion",
            "Zod / React-Hook-Form",
          ]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[20vw] w-full my-12 md:my-0"
          title="Backend"
          skills={[
            "Node.js / Express",
            "JWT & OAuth 2.0",
            "Socket.io (Real-time)",
            "Stripe Integration",
            "Passport.js",
            "Redis (Caching)",
            "Cloudinary / Mailjet",
          ]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[20vw] w-full mb-12"
          title="Database"
          skills={[
            "PostgreSQL",
            "Prisma ORM",
            "SQL",
          ]}
          icons={[ChevronLeft, ChevronRight]}
        />
        <SkillCard
          width="md:w-[20vw] w-full"
          title="DevOps/Tools"
          skills={[
            "Docker",
            "GitHub Actions (CI/CD)",
            "Monorepo (Workspaces)",
            "Vitest / Supertest",
            "Git / GitHub",
          ]}
          icons={[ChevronLeft, ChevronRight]}
        />
      </div>
    </Subsections>
  );
}

export default Skills;
