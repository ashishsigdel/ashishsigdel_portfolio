import { motion } from "framer-motion";
import { aboutMeTexts } from "@/data/aboutme";

export default function AboutMe() {
  return (
    <div className="max-w-[550px] mx-auto lg:mx-0 md:max-w-[730px] lg:max-w-[650px] rounded-ss-md rounded-ee-md backdrop-blur-sm text-gray-300 border border-white/15 cursor-grabbing">
      <div className="p-2 border-b border-white/15">
        <span className="font-geist">about-me</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2 m-0">
        {aboutMeTexts.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            className="m-0"
          >
            <span className="text-portfolio-primary mr-2">0{index + 1}.</span>
            <span
              className="about-text-html lg:text-[18px] text-[16px]"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </motion.p>
        ))}
      </div>
    </div>
  );
}
