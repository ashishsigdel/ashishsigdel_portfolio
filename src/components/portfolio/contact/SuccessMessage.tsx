import { FaRegCircleCheck } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { motion } from "framer-motion";

export default function SuccessMessage({ onReload }: { onReload: () => void }) {
  const animations = {
    success: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 200,
        },
      },
      exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    },
  };
  return (
    <motion.div
      className="m-6 px-3 py-8  border border-portfolio-primary rounded-md flex flex-col items-center justify-center "
      variants={animations.success}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex gap-5 items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <FaRegCircleCheck className="text-blue-400" />
        </motion.div>
        <motion.span
          className="text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Thank you for your message! I will reply you soon!
        </motion.span>
      </div>
      <motion.button
        onClick={onReload}
        className="mt-8 px-6 py-2.5 md:py-3 rounded-full text-sm font-medium bg-portfolio-primary/20 border border-blue-500/30 transition-all duration-300 relative overflow-hidden group z-10 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <IoReload className="text-blue-400" />
        <span className="text-blue-400">Reload Form</span>
      </motion.button>
    </motion.div>
  );
}
