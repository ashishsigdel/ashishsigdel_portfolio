import { motion } from "framer-motion";
import useGetActive from "../outline/useGetActive";

// Scroll indicator animation
const scrollIndicatorVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8,
      duration: 0.8,
      ease: "easeOut",
    },
  },
  pulse: {
    y: [0, 10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Scroll() {
  const { scrollToSection } = useGetActive();

  return (
    <div className="relative" onClick={() => scrollToSection("about")}>
      <motion.div
        variants={scrollIndicatorVariants}
        initial="initial"
        animate={["animate", "pulse"]}
        whileHover={{ scale: 1.1, y: 5 }}
        className="flex flex-col items-center cursor-pointer mt-5"
      >
        <motion.span
          className="text-xs text-white/50 mb-2"
          whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
        >
          Scroll
        </motion.span>
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="18"
            height="28"
            rx="9"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          <motion.circle
            cx="10"
            cy="8"
            r="4"
            fill="#3B82F6"
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.5, 1],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
