"use client";

import React, { useState } from "react";
import educationData from "./Education";
import DetailDrawer from "./DetailDrawer";

const SEALS = ["🎓", "🏛️", "📘"];

const EducationSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex !== null ? educationData[activeIndex] : null;

  return (
    <section className="py-16" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-heading text-3xl font-semibold text-ink mb-12 text-center">
          Education
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {educationData.map((edu, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative w-full sm:w-64 text-center bg-surface border border-line rounded-2xl p-6 hover:-translate-y-1 hover:border-primary transition-all duration-300"
            >
              <span
                aria-hidden="true"
                className="absolute inset-2 rounded-xl border border-dashed border-line pointer-events-none"
              />
              <span
                className="relative z-10 mx-auto mb-4 flex items-center justify-center w-11 h-11 rounded-full text-lg"
                style={{
                  background:
                    "conic-gradient(var(--primary), var(--secondary), var(--accent), var(--primary))",
                }}
              >
                {SEALS[i % SEALS.length]}
              </span>
              <h3 className="relative z-10 font-heading font-semibold text-ink text-balance">
                {edu.degree}
              </h3>
              <p className="relative z-10 text-primary text-sm font-semibold mt-1">{edu.school}</p>
              <p className="relative z-10 text-ink-soft text-xs mt-2">{edu.duration}</p>
              <span className="relative z-10 inline-block mt-3 text-xs font-bold text-primary">
                View details →
              </span>
            </button>
          ))}
        </div>
      </div>

      <DetailDrawer
        open={active !== null}
        onClose={() => setActiveIndex(null)}
        eyebrow={active?.duration}
        title={active?.degree}
        subtitle={active ? `${active.school} · ${active.location}` : ""}
        sections={
          active
            ? [
                active.note || active.highlights
                  ? {
                      heading: "Focus & Highlights",
                      body: (
                        <div className="space-y-3">
                          {active.note && <p>{active.note}</p>}
                          {active.highlights && (
                            <ul className="space-y-2 list-disc list-inside">
                              {active.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ),
                    }
                  : {
                      heading: "Focus & Highlights",
                      placeholder: true,
                      body: "Add coursework, thesis/capstone, or standout projects here.",
                    },
                { heading: "Details", body: active.description },
                ...(active.coursework
                  ? [
                      {
                        heading: "Coursework",
                        body: (
                          <div className="flex flex-wrap gap-2">
                            {active.coursework.map((c) => (
                              <span
                                key={c}
                                className="text-xs font-medium px-2.5 py-1 rounded-full border border-line text-ink-soft"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        ),
                      },
                    ]
                  : []),
                ...(active.links && Object.keys(active.links).length
                  ? [
                      {
                        heading: "Links",
                        body: (
                          <div className="flex flex-wrap gap-3">
                            {Object.entries(active.links).map(([label, url]) => (
                              <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-sm font-semibold hover:underline"
                              >
                                {label.charAt(0).toUpperCase() + label.slice(1)}
                              </a>
                            ))}
                          </div>
                        ),
                      },
                    ]
                  : []),
              ]
            : []
        }
      />
    </section>
  );
};

export default EducationSection;
