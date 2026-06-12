"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";

const socials = [
  { name: "GitHub", href: "https://github.com/ashishsigdel", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aasisigdel",
    icon: Linkedin,
  },
  { name: "Twitter / X", href: "https://x.com/_ashishsigdel_", icon: Twitter },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      message: "",
    });
    setIsSubmitted(false);
    setSubmitError(null);
    setIsSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(
        "https://api.ashishsigdel.com.np/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Unable to submit message. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      className="relative w-full pt-24 pb-12 px-6 overflow-visible"
    >
      {/* Divider glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 left-1/2 -translate-x-1/2 w-screen"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto flex flex-col gap-14"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="space-y-4">
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let&apos;s <span className="text-orange-600">Talk</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl">
            Have a project in mind, or just want to say hello? I&apos;m always
            open to new opportunities and conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left unified contact card */}
          <div className="group relative flex flex-col justify-between p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500 min-h-105">
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-orange-600/5 rounded-full blur-3xl group-hover:bg-orange-600/10 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-5 group-hover:border-zinc-700 transition-colors">
                <Mail size={22} className="text-orange-600" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                Email
              </p>
              <Link
                href="mailto:hi@ashishsigdel.com.np"
                className="inline-block text-xl font-semibold text-white group-hover:text-orange-500 transition-colors"
              >
                hi@ashishsigdel.com.np
              </Link>
              <p className="text-zinc-400 mt-2 text-sm max-w-sm">
                Drop me a line - I usually respond within 24 hours.
              </p>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-zinc-800/90">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4">
                Find Me Online
              </p>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 rounded-full border border-zinc-700 bg-zinc-900/70 flex items-center justify-center text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right form card */}
          <div className="group relative p-8 rounded-3xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 overflow-hidden transition-all duration-500 min-h-105">
            <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 overflow-hidden">
              <div
                className={cn(
                  "transition-all duration-500 ease-out",
                  isSubmitted
                    ? "opacity-0 -translate-y-3 pointer-events-none"
                    : "opacity-100 translate-y-0",
                )}
              >
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-5">
                  Send a Message
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-zinc-500"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-600"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-zinc-500"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-600"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-zinc-500"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-600"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-zinc-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-orange-600"
                      placeholder="Tell me about your project"
                    />
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-400" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={14} />
                  </button>
                </form>
              </div>

              <div
                className={cn(
                  "absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out",
                  isSubmitted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none",
                )}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border border-zinc-700 bg-zinc-900 mb-5">
                  <CheckCircle2 size={26} className="text-green-400" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
                  Message Sent
                </p>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Thanks for contacting me.
                </h3>
                <p className="text-zinc-400 text-sm max-w-sm mb-8">
                  I received your message and will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-900 transition-colors"
                >
                  <RotateCcw size={14} />
                  Reset Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
