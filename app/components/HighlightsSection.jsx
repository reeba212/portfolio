"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
  {
    title: "Promoted to UI Team Lead (May 2026)",
    desc: "Took ownership of the frontend for IBM's DCMS platform, now leading and mentoring the UI team.",
    icon: "🚀",
  },
  {
    title: "Accepted to Georgia Tech MSCS (Fall 2025)",
    desc: "Pursuing a specialization in Artificial Intelligence at Georgia Institute of Technology.",
    icon: "🎓",
  },
  {
    title: "Joined IBM Cloud (July 2025)",
    desc: "Started as a Software Developer, building core components of IBM Classic Cloud infrastructure.",
    icon: "💼",
  },
  {
    title: "Graduated with Distinction (June 2025)",
    desc: "B.Tech in CSE (AI/ML) - 9.5/10 CGPA, ranked 2nd out of 137 students.",
    icon: "📚",
  },
  {
    title: "Google Summer of Code (2023 & 2024)",
    desc: "Contributed to Apache Beam, enhancing Beam YAML SDK with SpannerIO & Enrichment Transforms.",
    icon: "🌐",
  },
];

export default function HighlightsSection() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 4s — resets whenever `index` changes, including manual nav,
  // so clicking an arrow gives a full 4s to read before it advances again.
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % highlights.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + highlights.length) % highlights.length);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Left side heading */}
      <div className="md:w-1/3 text-left">
        <h2 className="font-heading text-3xl font-semibold text-ink mb-2">
          Recent Highlights
        </h2>
        <p className="text-ink-soft text-sm">
          A quick snapshot of my latest milestones
        </p>
      </div>

      {/* Right side carousel */}
      <div className="md:w-2/3 relative overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-line rounded-2xl p-6 text-center min-h-[220px] flex flex-col justify-center"
          >
            <div className="text-5xl mb-4">{highlights[index].icon}</div>
            <h3 className="font-heading text-xl font-semibold text-ink mb-2">
              {highlights[index].title}
            </h3>
            <p className="text-ink-soft">{highlights[index].desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-surface border border-line p-2 rounded-full hover:border-primary hover:text-primary text-ink-soft"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-surface border border-line p-2 rounded-full hover:border-primary hover:text-primary text-ink-soft"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {highlights.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? "bg-primary" : "bg-primary-soft"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
