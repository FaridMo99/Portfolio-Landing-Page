import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import CardButton from "./CardButton";
import TransitionWrapper from "./HoC/TransitionWrapper";

function ProjectsCard({
  title,
  text,
  image,
  secondImage,
  alt,
  githubLink,
  technologies,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TransitionWrapper styles="w-full md:w-[35vw] h-[60vh] md:h-[70vh] relative rounded-2xl mb-12 md:mb-0 frost">
      <a
        href={link}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-1/3 w-full bg-black">
          <img
            src={image}
            alt={alt}
            className={`absolute h-full w-full transition-opacity duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={secondImage}
            alt={alt}
            className={`absolute h-full w-full  transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <h2 className="text-white px-3 py-4 font-bold">{title}</h2>
        <p className="px-3 mb-4 overflow-hidden h-[20vh]">{text}</p>
        <div className="w-full pl-1 pb-10 flex flex-wrap">
          {technologies?.map((technologie) => (
            <CardButton key={technologie} text={technologie} />
          ))}
        </div>
        <a
          className="absolute bottom-1 right-1"
          target="_blank"
          href={githubLink}
        >
          <FaGithub size={30} color="#000" />
        </a>
      </a>
    </TransitionWrapper>
  );
}

export default ProjectsCard;
