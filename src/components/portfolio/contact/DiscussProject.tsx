"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import myImage from "@/assets/ashish-profile.jpg";
import useProfile from "../about/useProfile";
import { MdArrowForward } from "react-icons/md";
import Link from "next/link";

type TypewriterTextProps = {
  text: string;
  inView: boolean;
};

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, inView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, text.length, {
        type: "tween",
        duration: 2,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [inView, count, text.length]);

  return <motion.span>{displayText}</motion.span>;
};

export default function DiscussProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const { profile, fetchProfile } = useProfile();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-5 px-3">
      <div className="flex flex-col my-3 mx-auto">
        <motion.div
          ref={ref}
          className="rounded-ss-md rounded-ee-md blur-bg border border-color w-full mb-5 mt-5 z-[99]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-b h-fit w-full border-color">
            <p className="p-3 font-geist">collaboration</p>
          </div>
          <div className="flex flex-col sm:flex-row p-10 gap-10 items-center">
            <motion.div
              className="mx-3 sm:mx-5 md:mx-7 lg:mx-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={profile?.profileURL || myImage}
                alt="ashish"
                width={150}
                height={150}
                className="rounded-full"
              />
            </motion.div>
            <div className="flex flex-col">
              <p className="text-3xl sm:text-4xl md:text-5xl min-h-[60px]">
                <TypewriterText
                  text="Let's work together on your next project"
                  inView={isInView}
                />
              </p>
              <Link
                href={"/contact"}
                className="relative overflow-hidden py-3 px-4 border border-color hover:border-portfolio-primary/80 transition-all duration-500 w-fit my-8 rounded-md font-geist group mx-auto sm:mx-0"
              >
                <span className="relative z-10 flex gap-4 items-center">
                  Let&#39;s-get-in-touch{" "}
                  <MdArrowForward className="group-hover:text-portfolio-primary/80 transition-all duration-500" />
                </span>
                <div className="absolute inset-0 bg-portfolio-primary/40 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
