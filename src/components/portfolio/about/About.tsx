"use client";
import {
  AboutMe,
  ILove,
  MeOnline,
  Portrait,
} from "@/components/portfolio/about";
import { motion } from "framer-motion";
import SectionTitle from "../utils/SectionTitle";

export default function About() {
  return (
    <section
      id="#about"
      className="min-h-screen bg-gradient-to-b from-gray-950 to-transparent mt-10"
    >
      <div className="py-8 md:py-10 px-4 min-[1200px]:px-14 max-w-7xl mx-auto">
        <SectionTitle title="About Me" />
        <div className="relative mt-16 flex flex-col-reverse lg:flex-row gap-4 lg:justify-around justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=""
          >
            <AboutMe />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=""
          >
            <Portrait />
          </motion.div>
        </div>
        <div className="flex justify-evenly lg:justify-normal gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bottom-[4rem] left-[10rem] lg:relative"
          >
            <MeOnline />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:relative left-[18rem] bottom-[2rem]"
          >
            <ILove />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
