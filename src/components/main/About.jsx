import React from "react";
import { BrickWallFire } from "lucide-react";
import Subsections from "../Subsections";

function About() {
  return (
    <>
      <Subsections title="About Me" height="screen" innerHeight="70vh">
        <div className="frost w-1/2 h-full rounded-2xl flex justify-center items-center">
          <p className="p-6">
            Hello! My name is John, and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
            Fast-forward to today, and I've had the privilege of working at a
            startup, a large corporation, and a student-led design studio. My
            main focus these days is building accessible, inclusive products and
            digital experiences. I also recently launched a course that covers
            everything you need to build a web app with the MERN stack.
          </p>
        </div>
        <div className="frost w-1/3 h-full rounded-2xl flex justify-center items-center">
          <BrickWallFire size={100} />
          <p>Photo Here</p>
        </div>
      </Subsections>
    </>
  );
}

export default About;
