import React from 'react'
import {FaGithub} from "react-icons/fa"
import CardButton from "./CardButton"



function ProjectsCard({title, text, image, alt, githubLink, technologies, width}) {
  return (
    <div className={`${width} h-1/2 relative rounded-2xl frost`}>
        <div className=""><img src={image} alt={alt}/></div>
        <h2 className='hover:text-secondary pl-3 py-4 font-bold'>{title}</h2>
        <p className='pl-3 pb-4 overflow-scroll h-[30vh]'>{text}</p>
        <div className='w-full pl-1 pb-10 flex flex-wrap'>
            {technologies?.map(technologie=> <CardButton key={technologie} text={technologie} />)}
        </div>
        <a className='absolute bottom-1 right-1' href={githubLink}><FaGithub size={30} color="#000" /></a>
    </div>
  )
}

export default ProjectsCard