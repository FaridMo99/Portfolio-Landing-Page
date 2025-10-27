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
        I am a Fullstack Developer.
      </motion.h3>
      <motion.p
        initial={{ x: "100vw", opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-white/40 text-xl"
      >
        I'm a self taught Fullstack Developer using React and NextJs on the frontend for Accessible and Responsive Web Apps.<br/>
        On the Backend i am using NodeJs and Express as Framework to create secure RESTful APIs <br />
        as well as PostgreSQL as the Database Layerto store Data reliably. 
      </motion.p>
    </section>
  );
}

export default Home;
