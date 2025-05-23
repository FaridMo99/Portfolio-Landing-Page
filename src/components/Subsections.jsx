import { motion } from "framer-motion";

function Subsections({ title, id, children }) {
  return (
    <section id={id} className="w-full text-white mb-30">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-6xl font-bold "
      >
        <span className="text-secondary">#</span>
        {title}
      </motion.h2>
      <div className="w-full pt-10 flex justify-around items-center">
        {children}
      </div>
    </section>
  );
}

export default Subsections;
