"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const highlights = [
  {
    title: "Accepted to Georgia Tech MSCS (Fall 2025)",
    desc: "Pursuing specialization in Computing Systems at Georgia Institute of Technology.",
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

  // Auto-scroll every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % highlights.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + highlights.length) % highlights.length);

  return (
    <section className="w-full max-w-5xl mx-auto py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Left side heading */}
      <div className="md:w-1/3 text-left">
        <h2 className="text-3xl font-bold text-white mb-2">
          Recent Highlights
        </h2>
        <p className="text-gray-400 text-sm">
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
            className="bg-[#1e1e1e] rounded-2xl shadow-lg p-6 text-center min-h-[220px] flex flex-col justify-center"
          >
            <div className="text-5xl mb-4">{highlights[index].icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {highlights[index].title}
            </h3>
            <p className="text-gray-300">{highlights[index].desc}</p>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full hover:bg-gray-700"
        >
          <ChevronRight className="text-white" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {highlights.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
