import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "./Navbar";
import { MenuIcon } from "lucide-react";
import NavbarModal from "./NavbarModal";
import { motion } from "framer-motion";

export type Link = {
  name: string;
  href: string;
}

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);

  const links:Link[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    function readScroll():void {
      setScroll(window.scrollY > 20);
    }

    function readResize():void {
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

  function clickHandler(e: React.MouseEvent): void {
    const target = e.target as HTMLElement
    if (isOpen) {
      if (!target.closest(".modalDiv")) {
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
      <img src="/LandingPage-Logo.png" className="h-24 w-auto object-contain" />
      <MenuIcon
        className="z-20 md:hidden w-[12%] h-full text-white"
        onClick={() => setIsOpen(true)}
      />
      <Navbar links={links} />
      {isOpen &&
        createPortal(
          <NavbarModal setIsOpen={setIsOpen} links={links} />,
          document.getElementById("portal") as HTMLDivElement,
        )}
    </motion.header>
  );
}

export default Header;
