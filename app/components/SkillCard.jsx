"use client";
import React from "react";

export default function SkillCard({ title, description, skills }) {
  return (
    <div className="bg-[#181818] p-5 rounded-lg shadow-md hover:shadow-purple-500 hover:scale-105 transition-all duration-300 border border-gray-700 text-center">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <a
            key={skill}
            href={`https://www.google.com/search?q=${encodeURIComponent(skill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:from-indigo-300 hover:to-purple-300 hover:underline transition duration-200"
          >
            {skill}
          </a>
        ))}
      </div>
    </div>
  );
}
