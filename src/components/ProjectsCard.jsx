import React from "react";
import { FaGithub } from "react-icons/fa";
import CardButton from "./CardButton";
import TransitionWrapper from "./HoC/TransitionWrapper";

function ProjectsCard({
  title,
  text,
  image,
  alt,
  githubLink,
  technologies,
  width,
}) {
  return (
    <TransitionWrapper
      styles={`${width} h-[60vh] md:h-[70vh] relative rounded-2xl frost`}
    >
      <img className="h-1/3 w-full" src={image} alt={alt} />
      <h2 className="hover:text-secondary pl-3 py-4 font-bold">{title}</h2>
      <p className="pl-3 mb-4 overflow-scroll h-[20vh]">{text}</p>
      <div className="w-full pl-1 pb-10 flex flex-wrap">
        {technologies?.map((technologie) => (
          <CardButton key={technologie} text={technologie} />
        ))}
      </div>
      <a className="absolute bottom-1 right-1" href={githubLink}>
        <FaGithub size={30} color="#000" />
      </a>
    </TransitionWrapper>
  );
}

export default ProjectsCard;
