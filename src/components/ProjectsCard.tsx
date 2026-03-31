import { useState} from "react";
import { FaGithub } from "react-icons/fa";
import TransitionWrapper from "./HoC/TransitionWrapper";
import type { Projects } from "./main/Projects";
import SkillButtonsContainer from "./SkillButtonsContainer";



function ProjectsCard({
  title,
  text,
  image,
  secondImage,
  alt,
  githubLink,
  technologies,
  link,
}: Projects) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <TransitionWrapper styles="w-full md:w-[25vw] h-150 relative rounded-2xl mb-12 md:mb-0 frost">
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
            className={`absolute h-full  w-full transition-opacity duration-500 ${
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
        <h2 className="text-white p-2 h-14 font-bold">{title}</h2>
        <p className="px-3 mb-4 overflow-x-hidden overflow-y-scroll h-1/3 pt-2">{text}</p>
        <SkillButtonsContainer skills={technologies} height="1/4 pb-6"/>
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
