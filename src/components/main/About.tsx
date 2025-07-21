import { BrickWallFire } from "lucide-react";
import Subsections from "../Subsections";
import TransitionWrapper from "../HoC/TransitionWrapper";

function About() {
  return (
    <>
      <Subsections title="About Me" id="about">
        <div className="flex md:flex-row flex-col justify-around md:justify-between items-center w-full h-full">
          <TransitionWrapper styles="frost rounded-2xl md:w-1/2 p-12">
            <p>
              Hi, I'm <strong>Farid Mohseni</strong>, a self-taught frontend
              developer passionate about building clean and interactive web
              experiences. I started my journey in web development by diving
              into technologies like <strong>React</strong>,{" "}
              <strong>Next.js</strong>, and the modern ecosystem surrounding
              them, including <strong>Tailwind CSS</strong> and{" "}
              <strong>Vite</strong>.
            </p>

            <p className="my-10">
              I love the process of creating real applications — turning code
              into something visual and interactive, and understanding all the
              processes behind it.
            </p>

            <p>
              I'm currently learning backend technologies such as{" "}
              <strong>Node.js</strong> and <strong>PostgreSQL</strong> to deepen
              my understanding of how web applications work behind the scenes.
              My goal is to build end-to-end solutions and grow into a confident
              <strong> full-stack developer</strong>.
            </p>
          </TransitionWrapper>
          <TransitionWrapper styles="frost rounded-2xl flex justify-center items-center w-full md:w-[35vw] h-[80vh] md:full mt-12 md:mt-0">
            <BrickWallFire size={100} />
            <p>Photo Here</p>
          </TransitionWrapper>
        </div>
      </Subsections>
    </>
  );
}

export default About;
