import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MenuIcon, X } from "lucide-react";
import NavbarModal from "./NavbarModal";
import { Square } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const Icon = isOpen ? X : MenuIcon;

  useEffect(() => {
    function readScroll() {
      setScroll(window.scrollY > 20);
    }

    function readResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("scroll", readScroll);
    window.addEventListener("resize", readResize);

    readScroll();

    return () => {
      window.removeEventListener("scroll", readScroll);
      window.removeEventListener("resize", readResize);
    };
  }, []);

  function clickHandler(e) {
    if (isOpen) {
      if (!e.target.closest(".modalDiv")) {
        setIsOpen(false);
      }
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: "-10vh" }}
      animate={{
        height: scroll ? "12.5vh" : "10vh",
        padding: scroll ? "2vw" : "0",
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "linear",
        opacity: { duration: 1 },
        y: { duration: 1 },
      }}
      className={`w-[98vw] top-[2vh] left-[1vw] rounded-2xl fixed flex justify-between items-center ${scroll ? "frost" : ""} z-50`}
      onClick={clickHandler}
    >
      <Square className="text-secondary" size={60} />
      <Icon
        size={null}
        className="z-20 md:hidden w-[12%] h-full text-white"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Navbar links={links} />
      {isOpen && <NavbarModal setIsOpen={setIsOpen} links={links} />}
    </motion.header>
  );
}

export default Header;
