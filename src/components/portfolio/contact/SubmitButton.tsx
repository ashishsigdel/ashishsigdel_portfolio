import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

type Props = {
  loading: boolean;
};

export default function SubmitButton({ loading }: Props) {
  const animations = {
    button: {
      initial: { scale: 1 },
      hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
      tap: { scale: 0.9 },
    },
  };
  return (
    <motion.button
      variants={animations.button}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      type="submit"
      className="px-6 py-2.5 md:py-3 rounded-full text-sm font-medium bg-portfolio-primary/20 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group z-10 flex items-center gap-2"
      disabled={loading}
    >
      <motion.span
        className="relative z-10"
        animate={loading ? { opacity: [1, 0.7, 1] } : {}}
        transition={{
          repeat: loading ? Infinity : 0,
          duration: 1.5,
        }}
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.span>
      <motion.div
        whileHover={{
          x: [0, 5, 0],
          transition: { duration: 0.5, repeat: Infinity },
        }}
        whileTap={{
          x: 5,
          opacity: 0,
          transition: { duration: 0.2 },
        }}
      >
        <IoIosSend size={18} />
      </motion.div>

      {/* Button shine effect */}
      <motion.span
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{ top: 0, left: "-100%", width: "100%", height: "100%" }}
        animate={
          loading
            ? {
                left: ["100%", "-100%"],
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  ease: "linear",
                },
              }
            : {}
        }
      />
    </motion.button>
  );
}
