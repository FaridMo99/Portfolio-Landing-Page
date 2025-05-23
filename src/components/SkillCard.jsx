import React from "react";
import CardButton from "./CardButton";
import TransitionWrapper from "./HoC/TransitionWrapper";

function SkillCard({ title, icons, width, skills }) {
  return (
    <TransitionWrapper
      styles={`frost ${width} h-[20vh] md:h-[25vh] rounded-2xl px-4`}
    >
      <h2 className="font-bold pt-2">
        {icons?.map((Icon) => (
          <Icon key={Icon} className="inline text-secondary" />
        ))}
        <br />
        {title}
      </h2>
      <div className="w-full py-4 mb-2  flex flex-wrap">
        {skills?.map((skill) => (
          <CardButton key={skill} text={skill} />
        ))}
      </div>
    </TransitionWrapper>
  );
}

export default SkillCard;
