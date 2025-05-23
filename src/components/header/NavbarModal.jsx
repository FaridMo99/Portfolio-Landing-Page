import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function NavbarModal({ links, setIsOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-screen h-screen fixed z-40 top-0 left-0 font-bold bg-black/75"
    >
      <div className="w-3/7 h-full modalDiv absolute top-0 right-0 bg-primary text-white">
        <ul className="w-full h-full flex flex-col justify-evenly items-center">
          {links.map((link) => (
            <motion.li
              className="relative cursor-pointer"
              key={link.href}
              initial="rest"
              whileHover="hover"
              animate="rest"
              onClick={() => {
                setIsOpen(false);
              }}
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
      </div>
    </motion.div>
  );
}

export default NavbarModal;
