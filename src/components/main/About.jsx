import React from "react";

function About() {
  return (
    <section
      id="Home"
      className="w-full text-white h-[88vh] flex flex-col pl-12"
    >
      <h2 className="text-secondary text-xl pt-32 pb-2">Hello, my name is</h2>
      <h1 className="text-6xl">Farid Mohseni</h1>
      <h3 className="text-white/60 text-5xl pt-2 pb-4">
        I am a Frontend Developer.
      </h3>
      <p className="text-white/40 text-xl">
        I'm a self taught Frontend Developer using React to create Accessible
        and performant Single Page Applications as well as NextJs for Multi Page
        Applications.
      </p>
    </section>
  );
}

export default About;
