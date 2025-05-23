import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "./Navbar";
import { MenuIcon } from "lucide-react";
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

  if (isOpen) {
    document.body.style.overflow = "hidden";
  }

  if (!isOpen) {
    document.body.style.overflow = "auto";
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
      className={`w-[98vw] top-[2vh] left-[1vw] rounded-2xl fixed font-bold flex justify-between items-center ${scroll ? "frost" : ""} z-30`}
      onClick={clickHandler}
    >
      <Square className="text-secondary" size={60} />
      <MenuIcon
        size={null}
        className="z-20 md:hidden w-[12%] h-full text-white"
        onClick={() => setIsOpen(true)}
      />
      <Navbar links={links} />
      {isOpen &&
        createPortal(
          <NavbarModal setIsOpen={setIsOpen} links={links} />,
          document.getElementById("portal"),
        )}
    </motion.header>
  );
}

export default Header;
