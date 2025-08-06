// app/components/EducationSection.jsx

import React from 'react';
import educationData from './Education';

const EducationSection = () => {
  return (
    <section className="py-12 bg-[#181818]" id="education">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#181818] p-6 rounded-lg shadow-md hover:shadow-pink-500 hover:scale-105 transition-all duration-300 border border-gray-700"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text font-semibold">
                    {edu.school}
                  </p>
                </div>
                <span className="text-gray-400 text-sm mt-2 sm:mt-0">{edu.duration}</span>
              </div>
              <p className="text-gray-400 text-sm mt-1">{edu.location}</p>

              <p className="text-gray-300 text-sm mt-4">{edu.description}</p>

              {edu.links && Object.keys(edu.links).length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  {Object.entries(edu.links).map(([label, url], i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:underline"
                    >
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
