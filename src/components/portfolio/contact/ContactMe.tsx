import React from "react";
import SectionTitle from "../utils/SectionTitle";
import ContactForm from "./ContactForm";

export default function ContactMe() {
  return (
    <section id="contact" className="min-h-screen mt-10">
      <div className="py-8 md:py-10 px-4 min-[1200px]:px-14 max-w-7xl mx-auto">
        <SectionTitle title="Get In Touch" />
        <div className="relative mt-16 space-y-6 lg:justify-around justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
