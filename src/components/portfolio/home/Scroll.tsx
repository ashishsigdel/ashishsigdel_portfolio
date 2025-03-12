import { motion } from "framer-motion";

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
  return (
    <motion.div
      variants={scrollIndicatorVariants}
      initial="initial"
      animate={["animate", "pulse"]}
      whileHover={{ scale: 1.1, y: 5 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
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
  );
}
