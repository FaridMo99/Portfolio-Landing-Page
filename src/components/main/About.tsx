import Subsections from "../Subsections";
import TransitionWrapper from "../HoC/TransitionWrapper";

function About() {
  return (
    <>
      <Subsections title="About Me" id="about">
        <div className="flex justify-center items-center w-full h-full mb-8">
          <TransitionWrapper styles="frost rounded-2xl md:w-1/2 p-12">
            <p>
              Hi, I'm <strong>Farid Mohseni</strong>, a self-taught Full-stack
              Developer passionate about building clean, performant, and
              interactive web experiences.
            </p>

            <p>
              On the Frontend, I have strong experience building dynamic user
              interfaces using React for Single-Page Applications and leverage
              Next.js for applications requiring SEO and server-side rendering
              capabilities.
            </p>

            <p className="my-10">
              My Backend focus involves building scalable services with Node.js
              and Express. I manage persistent data using PostgreSQL (with
              Prisma ORM or SQL) and optimize read speeds with Redis caching. I
              also handle deployment tools like Docker, and automate
              releases through CI/CD pipelines via GitHub Actions.
            </p>

            <p className="my-10">
              I am passionate about the end-to-end development cycle, from
              initial concept to a robust, live application.
            </p>
          </TransitionWrapper>
        </div>
      </Subsections>
    </>
  );
}

export default About;
