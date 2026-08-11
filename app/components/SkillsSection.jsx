import React from "react";
import SkillCard from "./SkillCard";

const skillsData = [
  {
    title: "Software Engineering",
    description: "Core concepts and system fundamentals.",
    skills: ["Operating Systems", "Computer Networks", "DBMS", "OOPS", "DSA"],
  },
  {
    title: "Machine Learning",
    description: "Building models and optimizing performance.",
    skills: ["TensorFlow", "PyTorch", "Keras", "XGBoost", "Azure ML"],
  },
  {
    title: "Artificial Intelligence",
    description: "Advanced techniques in NLP and Computer Vision.",
    skills: ["Computer Vision", "HuggingFace", "NLP", "NLTK", "OpenCV"],
  },
  {
    title: "Data Science",
    description: "Data processing, analysis, and visualization.",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
  },
  {
    title: "Cloud",
    description: "Cloud services and infrastructure management.",
    skills: ["AWS", "GCP", "Azure", "Terraform"],
  },
  {
    title: "Web Development",
    description: "Building responsive and interactive web apps.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Flask", "Next.js"],
  },
];

const programmingLanguages = ["Python", "Java", "C++", "C", "JavaScript", "PHP"];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 xl:px-16">
      <h2 className="font-heading text-3xl font-semibold text-center mb-12 text-ink">Skills</h2>

      <div className="max-w-5xl mx-auto">
        <div className="bg-surface border border-line rounded-2xl p-6 mb-8 text-center">
          <h3 className="font-heading text-base font-semibold text-ink mb-1">Programming Languages</h3>
          <p className="text-ink-soft text-xs mb-4">Proficiency in multiple programming languages.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {programmingLanguages.map((lang) => (
              <span
                key={lang}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-soft text-primary"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillSet) => (
            <SkillCard
              key={skillSet.title}
              title={skillSet.title}
              description={skillSet.description}
              skills={skillSet.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
