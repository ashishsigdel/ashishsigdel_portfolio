import { motion } from "framer-motion";
export default function AboutMe() {
  const aboutMeTexts = [
    "<span>Hello, Nice to meet you! I&#39;m Ashish, a <span class='highlight'>Computer Engineering</span> student.</span>",
    "<span>I&#39;m passionate about <span class='highlight'>Full Stack Development</span> as well as <span class='highlight'>Machine Learning</span> and <span class='highlight'>Artificial Intelligence.</span></span>",
    "<span>With expertise in the <span class='highlight'>MERN</span>, <span class='highlight'>MEAN</span>, and <span class='highlight'>Next.js</span> stacks, I thrive on creating seamless <span class='highlight'>UX</span> with a robust <span class='highlight'>backend</span>.</span>",
    "<span>Beyond coding, I love staying up-to-date with <span class='highlight'>tech trends</span> and enjoying the <span class='highlight'>outdoors.</span></span>",
    "<span>After 3+ years of using <span class='highlight'>Photoshop</span>, I have knowledge of the art of <span class='highlight'>Photomanipulation</span> and <span class='highlight'>graphic design.</span></span>",
  ];

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
