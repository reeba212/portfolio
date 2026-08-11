"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import DetailDrawer from "./DetailDrawer";
import RobotGraphic from "./RobotGraphic";
import publicationsData from "./Publications";
import { FaExternalLinkAlt } from "react-icons/fa";

const CERTIFICATIONS = [
  { name: "AI Programming in Python", url: "https://drive.google.com/file/d/1WzAHBXY2963fZxzArBH12Q0SzfhzX4kQ/view?usp=drive_link" },
  { name: "AWS ML Fundamentals", url: "https://drive.google.com/file/d/1SdXA2gSXTyB3z0g8vyxOstpmxLeh0CeE/view?usp=drive_link" },
  { name: "Google Cloud Fundamentals", url: "" },
  { name: "Git Fundamentals", url: "https://drive.google.com/file/d/1sXgHt7UYfm_HacvZQoUIqzJOb6dlzwH2/view?usp=sharing" },
  { name: "Introduction to Cloud", url: "https://drive.google.com/file/d/1pv1JnakcQZuxk4yYwYrDfH8TDuZLK4Vt/view?usp=drive_link" },
  { name: "Kubernetes and Containers", url: "https://drive.google.com/file/d/1Ibgy3bUIkpCbordZJyUyfd6HYWL7igG4/view?usp=drive_link" },
  { name: "Python Intermediate", url: "https://drive.google.com/file/d/12adHzuicrEg0JNMnXnccqtnffwUIoJAR/view?usp=sharing" },
  { name: "Python for Beginners", url: "https://drive.google.com/file/d/19Ui_ULHr8abB237E0DZzMnekAGi8UgXk/view?usp=sharing" },
  { name: "C++", url: "https://drive.google.com/file/d/1s2O1Vtuj7MysM4QTbzJ2zAU2DxPVKvfp/view?usp=sharing" },
];

const TABS = [
  { id: "publications", title: "Publications" },
  { id: "certifications", title: "Certifications" },
];

export default function AboutSection() {
  const [tab, setTab] = useState("publications");
  const [isPending, startTransition] = useTransition();
  const [activePub, setActivePub] = useState(null);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const active = activePub !== null ? publicationsData[activePub] : null;

  return (
    <section id="about" className="text-ink py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_380px] gap-8 md:gap-10 items-stretch">
        <div>
          <h2 className="font-heading text-4xl font-semibold text-ink mb-4">About Me</h2>

          <p className="text-base lg:text-lg text-ink-soft max-w-2xl">
            Hi, I'm Reeba, a software developer at IBM who likes being handed the problem nobody's
            solved yet. I lead the UI team on a platform I built from scratch to replace a legacy
            product, reviewing backend PRs and debugging backend issues myself whenever it
            mattered more than staying in my lane. Before that, I owned identity infrastructure
            that 100+ engineers relied on daily. I've also contributed to Google Summer of Code
            twice with Apache Beam. None of that came from already knowing the answer going in,
            it came from being <span className="text-ink font-semibold">fast enough to learn it.</span>{" "}
            Tech moves fast enough that being good at one stack has a shelf life; being good at
            learning doesn't.
          </p>

          <div className="mt-6 text-sm">
            <h3 className="text-xs font-bold uppercase tracking-wide text-ink-soft mb-2">What I actually care about</h3>
            <ul className="space-y-1.5 text-ink-soft list-disc list-inside">
              <li>Systems that don't page anyone at 2am</li>
              <li>Automating the parts of a job that shouldn't need a human</li>
              <li>AI/ML that solves something real, not just something demo-able</li>
              <li>Turning "nobody documented this" into a process that outlives me</li>
            </ul>
          </div>

          <p className="text-sm text-ink-soft mt-5 max-w-2xl">
            <span className="text-ink font-semibold">Tech stack:</span> whatever the problem is
            actually asking for. I didn't know Go a year ago either.
          </p>

          <div className="flex flex-row mt-8 space-x-4">
            {TABS.map((tabItem) => (
              <TabButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </TabButton>
            ))}
          </div>

          <div className="mt-4">
            {tab === "publications" && (
              <div className="bg-surface border border-line rounded-xl divide-y divide-line overflow-hidden">
                {publicationsData.map((pub, i) => (
                  <button
                    key={pub.title}
                    onClick={() => setActivePub(i)}
                    className="w-full text-left px-4 py-3.5 hover:bg-primary-soft/40 transition-colors duration-200 flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-ink text-sm font-semibold">{pub.title}</p>
                        {pub.presented && (
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wide text-primary bg-primary-soft px-2 py-0.5 rounded-full">
                            Presented
                          </span>
                        )}
                      </div>
                      <p className="text-ink-soft text-xs mt-1">{pub.summary}</p>
                    </div>
                    <span className="shrink-0 text-primary text-sm mt-0.5">→</span>
                  </button>
                ))}
              </div>
            )}

            {tab === "certifications" && (
              <ul className="columns-1 sm:columns-2 gap-x-10 text-sm">
                {CERTIFICATIONS.map((item) => (
                  <li key={item.name} className="flex gap-2 items-center justify-between break-inside-avoid mb-2.5 pr-2">
                    <div className="flex gap-2 items-center min-w-0">
                      <span className="text-primary shrink-0">•</span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink text-sm font-semibold hover:text-primary transition duration-200 truncate"
                      >
                        {item.name}
                      </a>
                    </div>
                    <FaExternalLinkAlt className="w-3.5 h-3.5 text-ink-soft shrink-0" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <RobotGraphic className="hidden md:block w-full h-full min-h-[360px]" />
      </div>

      <DetailDrawer
        open={active !== null}
        onClose={() => setActivePub(null)}
        eyebrow={active?.venue}
        title={active?.title}
        sections={
          active
            ? [
                { heading: "Overview", body: active.detail.overview },
                ...(active.detail.approach
                  ? [
                      {
                        heading: "Approach",
                        body: (
                          <ul className="space-y-2 list-disc list-inside">
                            {active.detail.approach.map((a, i) => (
                              <li key={i}>{a}</li>
                            ))}
                          </ul>
                        ),
                      },
                    ]
                  : []),
                {
                  heading: "Key Results",
                  body: (
                    <ul className="space-y-2 list-disc list-inside">
                      {active.detail.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  heading: "Link",
                  body: (
                    <a
                      href={active.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      Read the full paper →
                    </a>
                  ),
                },
              ]
            : []
        }
      />
    </section>
  );
}
