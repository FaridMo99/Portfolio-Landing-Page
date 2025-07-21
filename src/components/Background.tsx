import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const firefliesCount:number = 20;

const randomNum = (min:number, max:number):number => Math.random() * (max - min) + min;

function Firefly() {
  const size:number = randomNum(4, 10);
  const x: number = randomNum(0, 100);
  const y: number = randomNum(0, 100);

  return (
    <motion.div
      className="bg-secondary/20"
      style={{
        position: "absolute",
        top: `${y}vh`,
        left: `${x}vw`,
        width: size,
        height: size,
        filter: "drop-shadow(0 0 6px rgba(255, 255, 180, 0.9))",
        opacity: 0.8,
        pointerEvents: "none",
      }}
      animate={{
        x: [0, randomNum(-20, 20), 0],
        y: [0, randomNum(-20, 20), 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        repeat: Infinity,
        duration: randomNum(3, 6),
        ease: "easeInOut",
      }}
    />
  );
}

function Background() {
const portal = document.getElementById("background-portal") as HTMLElement;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full -z-50 bg-black overflow-hidden">
      {Array.from({ length: firefliesCount }).map((_, i) => (
        <Firefly key={i} />
      ))}
    </div>,
    portal
  );
}

export default Background;