import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Navbar({ links }) {
  return (
    <nav className="w-1/2 h-full hidden md:block text-white">
      <ul className="w-full h-full md:flex justify-evenly items-center">
        {links.map((link) => (
          <motion.li
            className="relative cursor-pointer"
            key={link.href}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <a href={link.href}>{link.name}</a>
            <motion.span
              className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-secondary"
              variants={{
                rest: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
