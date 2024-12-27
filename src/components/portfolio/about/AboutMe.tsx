"use client";

import React from "react";

export default function AboutMe() {
  return (
    <div className="w-full max-w-2xl lg:max-w-3xl mx-auto bg-black/50 rounded-ss-md rounded-ee-md backdrop-blur-sm  text-gray-300 border border-white/15 h-fit cursor-grab">
      <div className="p-2 border-b border-white/15">
        <span>about-me</span>
      </div>
      <div className="p-3 md:p-5 flex flex-col gap-2 m-0">
        <p className="m-0">
          <span className="text-gray-500 mr-1">01.</span>
          Hello, Nice to meet you! I&#39;m Ashish, a{" "}
          <span className="text-portfolio-primary">
            Computer Engineering
          </span>{" "}
          student.
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">02.</span>
          I&#39;m passionate about{" "}
          <span className="text-portfolio-primary">
            Full Stack Development{" "}
          </span>
          as well as{" "}
          <span className="text-portfolio-primary">Machine Learning </span>
          and{" "}
          <span className="text-portfolio-primary">
            Artificial Intelligence.
          </span>
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">03.</span>
          With expertise in the{" "}
          <span className="text-portfolio-primary">MERN, MEAN</span> and{" "}
          <span className="text-portfolio-primary">Next.js</span> stacks, I
          thrive on creating seamless{" "}
          <span className="text-portfolio-primary">UX</span> with a{" "}
          <span className="text-portfolio-primary">robust backend</span>.
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">04.</span>
          Beyond coding, I <span className="text-portfolio-primary">
            love
          </span>{" "}
          staying <span className="text-portfolio-primary">up-to-date</span>{" "}
          with <span className="text-portfolio-primary">tech trends</span> and
          enjoying the <span className="text-portfolio-primary">outdoors</span>.
        </p>

        <p className="m-0">
          <span className="text-gray-500 mr-1">05.</span>
          After 3+ years of using{" "}
          <span className="text-portfolio-primary">Photoshop,</span> I have
          knowledge of the art of{" "}
          <span className="text-portfolio-primary">Photomanipulation</span> and{" "}
          <span className="text-portfolio-primary">graphic design</span>.
        </p>
      </div>
    </div>
  );
}
