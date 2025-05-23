import React from "react";
import CardButton from "./CardButton";

function SkillCard({ title, icons, width, skills }) {
  return (
    <div className={`frost ${width} h-1/2 rounded-2xl pl-4`}>
      <h2 className="font-bold pt-2">
       {icons?.map(Icon => <Icon key={Icon} className="inline text-secondary"/>)}
        {title}
      </h2>
      <div className="w-full py-4  flex flex-wrap">
        {skills?.map((skill) => (
          <CardButton key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillCard
