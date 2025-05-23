import { BrickWallFire } from "lucide-react";
import Subsections from "../Subsections";
import TransitionWrapper from "../HoC/TransitionWrapper";

function About() {
  return (
    <>
      <Subsections title="About Me" id="about">
        <div className="flex md:flex-row flex-col justify-around md:justify-between items-center w-full h-full">
          <TransitionWrapper styles="frost rounded-2xl flex justify-center items-center w-full md:w-[50vw] h-[80vh] md:full">
            <p className="p-6">
              Hello! My name is John, and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
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
