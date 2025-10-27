import CardButton from "./CardButton";
import TransitionWrapper from "./HoC/TransitionWrapper";
import type { LucideIcon } from "lucide-react";

type SkillCardProps = {
  title: string;
  icons:LucideIcon[];
  width: string;
  skills:string[];
}

function SkillCard({ title, icons, width, skills }:SkillCardProps) {
  return (
    <TransitionWrapper
      styles={`frost ${width} rounded-2xl px-4 h-70`}
    >
      <h2 className="font-bold pt-2">
        {icons?.map((Icon,index) => (
          <Icon key={index} className="inline text-secondary" />
        ))}
        <br />
        {title}
      </h2>
      <div className="w-full py-4 mb-2 flex flex-wrap">
        {skills?.map((skill) => (
          <CardButton key={skill} text={skill} />
        ))}
      </div>
    </TransitionWrapper>
  );
}

export default SkillCard;
