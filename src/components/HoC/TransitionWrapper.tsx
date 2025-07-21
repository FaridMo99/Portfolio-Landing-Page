import { motion } from "framer-motion";
import type { ReactNode } from "react";

type TransitionWrapperProps = {
  styles: string;
  children:ReactNode;
}

function TransitionWrapper({ styles, children }:TransitionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={styles}
    >
      {children}
    </motion.div>
  );
}

export default TransitionWrapper;
