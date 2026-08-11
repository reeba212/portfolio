"use client";
import React, { useEffect, useState } from "react";
import DetailDrawer from "./DetailDrawer";
import { formatDuration } from "../lib/duration";

const experiences = [
  {
    company: "IBM",
    role: "Software Developer",
    duration: "Jul 2025 - Present",
    techStack: ["React", "Go", "Python", "UI Architecture", "Identity & Access", "Team Leadership"],
    description: [
      "UI team lead for a workflow-driven datacenter infrastructure orchestration platform managing hardware lifecycle across global regions.",
      "Owns identity management for IBM's internal cloud platform — designed and deployed internal APIs and developer tools for user provisioning and authentication.",
      "Built and maintains Go-based validation services powering secure access to internal systems for 100+ engineers.",
      "Volunteers on an IBM Accelerator CSR initiative (Al Baha project) applying reinforcement learning to optimize port operations and reduce carbon emissions.",
    ],
    detail: {
      overview:
        "Software Developer at IBM (Bengaluru, hybrid). Leads the UI team on a workflow-driven datacenter infrastructure orchestration platform managing the end-to-end physical lifecycle of hardware across global regions, while also owning identity management and Go-based validation services for IBM's internal cloud platform.",
      contributions: [
        "Leads the UI team: owns task planning, code review, and the frontend repo for the datacenter orchestration platform.",
        "Designed and shipped a role-based UI permissions framework, an inventory hierarchy tree view (region → site → room → rack → device → component), a logistics dashboard, and asset check-in workflows.",
        "Designed and deployed internal APIs and developer tools for IBM's internal cloud platform to streamline user provisioning and authentication.",
        "Built and maintains Go-based validation services gating secure access to internal systems for 100+ engineers — critical infrastructure where downtime blocks sysadmins from reaching servers at all.",
        "Independently established secret/certificate rotation processes and Jenkins pipeline maintenance for the validation service, with no prior documentation to build from.",
        "Diagnosed and resolved a production outage in under 2 hours while off-call, tracing a credential issue back through the rotation pipeline.",
        "Volunteers on an IBM Accelerator CSR initiative (Al Baha project) applying reinforcement learning to optimize port operations and reduce carbon emissions.",
      ],
      impact: [
        "Grew into UI team lead and became primary owner of the frontend repository for a brand-new platform.",
        "Kept access-critical validation infrastructure running for 100+ engineers with no unplanned downtime beyond the one incident resolved same-day.",
        "Unblocked delivery by prototyping ahead of design specs instead of waiting on UX.",
      ],
    },
  },
  {
    company: "IBM",
    role: "SDE Intern",
    duration: "Jan 2025 - Jul 2025",
    techStack: ["AIOps", "Ansible", "Citrix Nitro APIs", "RHEL", "Automation"],
    description: [
      "Contributed to an AIOps initiative integrating agentic AI to automate issue resolution and improve infra responsiveness.",
      "Automated Citrix SDX upgrades using Ansible playbooks and Citrix Nitro APIs, eliminating manual intervention.",
      "Supported infrastructure upgrades: RHEL 8 kickstart automation, iSCSI-to-NFS storage migration, and Uptycs deployment.",
    ],
    detail: {
      overview:
        "Software Development Engineer Intern on IBM's infrastructure team, focused on AIOps and automation for internal cloud operations.",
      contributions: [
        "Contributed to an AIOps initiative focused on integrating agentic AI to enhance infrastructure operations, automating issue resolution and improving responsiveness through intelligent workflows.",
        "Automated the Citrix SDX upgrade process using Ansible playbooks and Citrix Nitro APIs, eliminating manual intervention and increasing reliability across environments.",
        "Supported infrastructure upgrades including RHEL 8 kickstart automation, iSCSI-to-NFS storage migration, and Uptycs deployment, applying scripting and config management to improve system efficiency.",
      ],
      impact: [
        "Removed manual steps from the Citrix SDX upgrade process across environments.",
        "Improved reliability and efficiency across several internal infrastructure upgrade workflows.",
      ],
    },
  },
  {
    company: "Apache Software Foundation",
    role: "Google Summer of Code Contributor",
    duration: "May 2024 - Aug 2024",
    techStack: ["SpannerIO", "Beam YAML", "GCP", "Python", "Java"],
    description: [
      "Built a Schema Transform Provider for Spanner Read — a cross-language transform with config validation and a builder-pattern API.",
      "Debugged and rebuilt the Spanner Write transform's error handling, routing failed writes to a dead-letter queue instead of silently dropping them.",
      "Extended the Enrichment Transform to support BigQuery, Bigtable, Feast, and Vertex AI Feature Store as lookup sources.",
      "Authored integration/unit tests and 4 end-to-end YAML pipeline use cases.",
    ],
    detail: {
      overview:
        "Contributed cross-language I/O and enrichment capabilities to Apache Beam's YAML SDK, so pipeline authors could read/write Cloud Spanner and enrich records from external sources without writing Java or Python.",
      contributions: [
        "Built a Schema Transform Provider for Spanner Read — a cross-language transform converting Spanner's Struct data into Beam's schema-aware Row type, with config validation and a builder-pattern API.",
        "Debugged and rebuilt the Spanner Write transform's error handling, adding a utility to map failed mutations back into Beam Rows so failed writes route to a dead-letter queue instead of silently dropping.",
        "Extended the Enrichment Transform to support BigQuery, Bigtable, Feast, and Vertex AI Feature Store as lookup sources.",
        "Authored integration/unit tests, including a custom temporary-Spanner-instance test harness, and 4 end-to-end YAML pipeline use cases.",
      ],
      impact: [
        "Added production-ready Spanner I/O and enrichment capability to Beam's YAML SDK, lowering the barrier to using Cloud Spanner and external enrichment sources in no-code YAML pipelines.",
      ],
      links: {
        report: "https://medium.com/@reebaq2/apache-beam-yaml-features-gsoc-2024-report-c39f01dacc1c",
      },
    },
  },
  {
    company: "Apache Software Foundation",
    role: "Google Summer of Code Contributor",
    duration: "May 2023 - Sep 2023",
    techStack: ["CNN", "LSTM", "Librosa", "NLP", "Speech Processing", "TensorFlow"],
    description: [
      "Batch CNN image-classification pipeline on CIFAR-10 (TensorFlow, RunInference) — 89% accuracy.",
      "Real-time streaming pipeline classifying YouTube comment sentiment via bi-directional LSTM — 86% accuracy.",
      "Batch speech-emotion-recognition pipeline using Librosa feature extraction and a CNN — 76% accuracy.",
      "Diagnosed and resolved recurring RunInference and pipeline-runner visibility issues.",
    ],
    detail: {
      overview:
        "Built three real-world ML reference pipelines for Apache Beam to fill a gap in practical ML examples for the framework, mentored by Google engineers.",
      contributions: [
        "Batch CNN image-classification pipeline on CIFAR-10 (TensorFlow, RunInference) — 89% accuracy.",
        "Real-time streaming pipeline classifying YouTube comment sentiment via bi-directional LSTM, ingesting from Google Pub/Sub — 86% accuracy.",
        "Batch speech-emotion-recognition pipeline using Librosa feature extraction and a CNN over the CREMA-D dataset — 76% accuracy.",
        "Diagnosed and resolved recurring RunInference shape-mismatch and numpy/tensor conversion issues, and pipeline-runner visibility gaps by switching to the Interactive Runner for local streaming debugging.",
      ],
      impact: [
        "Delivered 3 open-source example notebooks that became reference implementations for ML use cases in Apache Beam.",
      ],
      links: {
        report: "https://medium.com/@reebaq2/real-world-ml-use-cases-apache-beam-gsoc-2023-report-edeb313d43ba",
      },
    },
  },
];

const Experiences = () => {
  const [now, setNow] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const active = activeIndex !== null ? experiences[activeIndex] : null;

  return (
    <section className="pt-4 pb-16" id="experiences">
      <div className="max-w-6xl mx-auto px-0 sm:px-4">
        <h2 className="font-heading text-3xl font-semibold text-ink mb-12 text-center">
          Experience
        </h2>

        <ol className="relative">
          {experiences.map((exp, i) => {
            const isLast = i === experiences.length - 1;
            const roleLines = exp.role.split(", ");
            return (
              <li key={i} className="flex gap-3 sm:gap-4 pb-8 last:pb-0">
                <div className="hidden sm:flex flex-col items-end w-[150px] shrink-0 pt-1.5 text-right">
                  <span className="text-sm font-bold text-ink-soft leading-snug whitespace-nowrap">
                    {exp.duration.replace(" - ", " – ")}
                  </span>
                  <span className="text-xs font-bold text-primary mt-1 whitespace-nowrap">
                    {now ? formatDuration(exp.duration, now) : "…"}
                  </span>
                </div>

                <div className="flex flex-col items-center shrink-0">
                  <span className="relative z-10 flex items-center justify-center w-[26px] h-[26px] rounded-full bg-primary-soft border-2 border-primary shrink-0 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="flex-1 w-0 border-l-2 border-dashed mt-1"
                      style={{ borderColor: "var(--primary)", opacity: 0.4 }}
                    />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <span className="sm:hidden inline-block mb-2 text-sm font-bold text-ink-soft whitespace-nowrap">
                    {exp.duration.replace(" - ", " – ")}
                    <span className="text-primary ml-2">
                      {now ? formatDuration(exp.duration, now) : "…"}
                    </span>
                  </span>

                  <button
                    onClick={() => setActiveIndex(i)}
                    className="w-full text-left bg-surface border border-line rounded-2xl p-4 sm:p-6 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="grid sm:grid-cols-[minmax(150px,190px)_1fr] gap-4 sm:gap-6">
                      <div>
                        {roleLines.map((line, j) => (
                          <h3 key={j} className="font-heading text-base font-semibold text-ink leading-snug">
                            {line}
                          </h3>
                        ))}
                        <p className="text-primary font-semibold text-sm mt-1">{exp.company}</p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {exp.techStack.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-medium px-2.5 py-1 rounded-full border border-line text-ink-soft"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <ul className="space-y-1.5 text-sm text-ink-soft list-disc list-inside">
                          {exp.description.map((d, j) => (
                            <li key={j}>{d}</li>
                          ))}
                        </ul>

                        <span className="inline-block mt-3 text-xs font-bold text-primary">
                          View details →
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <DetailDrawer
        open={active !== null}
        onClose={() => setActiveIndex(null)}
        eyebrow={active ? active.duration.replace(" - ", " – ") : ""}
        title={active?.role}
        subtitle={active?.company}
        sections={
          active
            ? [
                { heading: "Overview", body: active.detail.overview },
                {
                  heading: "Key Contributions",
                  body: (
                    <ul className="space-y-2 list-disc list-inside">
                      {active.detail.contributions.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  heading: "Impact",
                  body: (
                    <ul className="space-y-2 list-disc list-inside">
                      {active.detail.impact.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  ),
                },
                {
                  heading: "Stack",
                  body: (
                    <div className="flex flex-wrap gap-2">
                      {active.techStack.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-medium px-2.5 py-1 rounded-full border border-line text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ),
                },
                ...(active.detail.links && Object.keys(active.detail.links).length
                  ? [
                      {
                        heading: "Links",
                        body: (
                          <div className="flex flex-wrap gap-3">
                            {Object.entries(active.detail.links).map(([label, url]) => (
                              <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary text-sm font-semibold hover:underline"
                              >
                                {label.charAt(0).toUpperCase() + label.slice(1)} →
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

export default Experiences;
