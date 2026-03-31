import { motion } from "framer-motion";

function Home() {
  return (
    <section id="home" className="w-full text-white h-[88vh] flex flex-col">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-secondary text-xl pt-32 pb-2"
      >
        Hello, my name is
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
        animate={{ opacity: 1 }}
        className="text-6xl"
      >
        Farid Mohseni
      </motion.h1>
      <motion.h3
        initial={{ x: "-100vw", opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-white/60 text-5xl pt-2 pb-4"
      >
        I am a Fullstack Cloud Developer.
      </motion.h3>
      <motion.p
        initial={{ x: "100vw", opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-white/40 text-xl"
      >
        I’m a self-taught developer who enjoys building with
        <span className="text-white/80"> Go, TypeScript, and React</span>. While
        I enjoy writing code the most, I’ve always been interested about what happens after
        the application is finished and how it scales and runs highly available in production.
        <br />
        That interest led me to learn<span className="text-white/80">AWS and Terraform</span>.
        I’ve got a few certifications and together with Docker and Github Actions i make sure the Applications
        can run reliable, highly available and automated in the real world.
      </motion.p>
    </section>
  );
}

export default Home;
