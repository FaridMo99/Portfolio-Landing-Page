import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SubsectionsProps = {
  title: string;
  id: string;
  children:ReactNode;
}

function Subsections({ title, id, children }:SubsectionsProps) {
  return (
    <section id={id} className="w-full text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
        className="text-6xl font-bold line-clamp-2"
        title={title}
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
