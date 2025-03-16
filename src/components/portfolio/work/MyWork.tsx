"use client";
import { whatido } from "@/data/whatido";
import WorkCard from "./WorkCard";
import SectionTitle from "../utils/SectionTitle";
import { motion } from "framer-motion";

export default function MyWork() {
  return (
    <section id="services" className="min-h-screen mt-10">
      <div className="py-8 md:py-10 px-4 min-[1200px]:px-14 max-w-7xl mx-auto">
        <SectionTitle title="What I Do?" />
        <div className="relative mt-16 space-y-6 lg:justify-around justify-center">
          {whatido.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className=""
            >
              <WorkCard index={index} work={work} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
