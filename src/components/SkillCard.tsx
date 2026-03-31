import TransitionWrapper from "./HoC/TransitionWrapper";
import type { LucideIcon } from "lucide-react";
import SkillButtonsContainer from "./SkillButtonsContainer";

type SkillCardProps = {
  title: string;
  icons:LucideIcon[];
  width: string;
  skills:string[];
}

function SkillCard({ title, icons, width, skills }:SkillCardProps) {
  return (
    <TransitionWrapper
      styles={`frost ${width} rounded-2xl px-4 h-50 flex flex-col`}
    >
      <h2 className="font-bold py-2">
        {icons?.map((Icon,index) => (
          <Icon key={index} className="inline text-secondary" />
        ))}
        {title}
      </h2>
        <SkillButtonsContainer skills={skills} height="full"/>
    </TransitionWrapper>
  );
}

export default SkillCard;
