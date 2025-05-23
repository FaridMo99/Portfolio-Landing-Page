import React from "react";
import { motion } from "framer-motion";

function TransitionWrapper({ styles, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles}
    >
      {children}
    </motion.div>
  );
}

export default TransitionWrapper;
