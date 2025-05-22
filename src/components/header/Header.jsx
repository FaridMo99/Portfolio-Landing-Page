import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { MenuIcon, X } from "lucide-react";
import NavbarModal from "./NavbarModal";
import {Square} from "lucide-react"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Footer", href: "#footer" },
    { name: "Lorem", href: "#lorem" },
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
    <header
      className={`w-full h-[10vh] ${scroll ? "frost" : ""} fixed top-0 flex justify-around items-center`}
      onClick={clickHandler}
    >
      <Square size={60}/>
      <Icon
        size={null}
        className="z-20 md:hidden w-[11%] h-full absolute right-3 text-white"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Navbar links={links} />
      {isOpen && <NavbarModal links={links} />}
    </header>
  );
}

export default Header;
