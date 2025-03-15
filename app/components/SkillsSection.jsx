"use client";
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
    skills: ["HTML", "CSS", "JavaScript", "React", "Flask", "Node.js"],
  },
];

const programmingLanguages = ["Python", "Java", "C++", "C", "SQL"];

export default function SkillsSection() {
  return (
    <section id="skills" className="text-white py-10 px-4 xl:px-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Skills</h2>

      {/* Programming Languages Section */}
      <div className="bg-[#181818] p-5 rounded-lg shadow-md hover:shadow-purple-500 hover:scale-105 transition-all duration-300 border border-gray-700 mb-8 text-center">
        <h3 className="text-lg font-bold text-white mb-2">Programming Languages</h3>
        <p className="text-gray-400 text-sm mb-4">Proficiency in multiple programming languages.</p>
        <div className="flex flex-wrap justify-center gap-2">
          {programmingLanguages.map((lang) => (
            <a
              key={lang}
              href={`https://www.google.com/search?q=${encodeURIComponent(lang)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-500 text-white text-sm px-4 py-2 rounded-full hover:brightness-110 transition duration-200"
            >
              {lang}
            </a>
          ))}
        </div>
      </div>

      {/* Skill Cards Section */}
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
    </section>
  );
}
