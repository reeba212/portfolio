'use client';
import React from 'react';
import { FaTrophy, FaStar, FaBook, FaMedal, FaRobot, FaLaptopCode } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-pink-300" />, 
      text: 'Selected for GSoC twice (2023 & 2024) with Apache Beam, working under the guidance of Google software engineers.',
    },
    {
      icon: <FaStar className="text-pink-300" />,
      text: 'Top 2.5% of candidates in Google Girl Hackathon 2023.',
    },
    {
      icon: <FaRobot className="text-pink-300" />,
      text: 'Qualified AWS DeepRacer, earned AWS AI/ML Scholarship, and completed AI Programming in Python and AWS Machine Learning Fundamentals nanodegrees.',
    },
    {
      icon: <FaMedal className="text-pink-300" />,
      text: 'Consistently ranked in the top 2% of my class; currently ranked 2nd out of 120+ students in my branch.',
    },
    {
      icon: <FaBook className="text-pink-300" />,
      text: 'Published two research papers.',
    },
    {
      icon: <FaLaptopCode className="text-pink-300" />,
      text: 'Selected as a Beta Microsoft Learn Student Ambassador (MLSA).',
    },
    {
      icon: <FaTrophy className="text-pink-300" />,
      text: 'Top 10 teams in WiEHack 5.0, an international hybrid hackathon.',
    },
  ];

  return (
    <section className="py-12 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Achievements</h2>
        <ul className="space-y-6">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 p-5 bg-[#181818] bg-opacity-60 rounded-lg shadow-md border border-[#3E075F] transition-transform transform hover:scale-105 hover:shadow-pink-500"
            >
              {/* Icon */}
              <div className="text-3xl">{achievement.icon}</div>

              <p className="text-lg text-gray-300 flex-1">{achievement.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
