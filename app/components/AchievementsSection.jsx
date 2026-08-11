'use client';
import React from 'react';
import { FaTrophy, FaStar, FaBook, FaMedal, FaRobot, FaLaptopCode, FaUsers } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      icon: <FaUsers className="text-primary" />,
      text: 'Became team lead within a year of joining, for a critical project managing datacenter operations and replacing legacy architecture.',
    },
    {
      icon: <FaTrophy className="text-primary" />,
      text: 'Selected for GSoC twice (2023 & 2024) with Apache Beam, working under the guidance of Google software engineers.',
    },
    {
      icon: <FaStar className="text-primary" />,
      text: 'Top 2.5% of candidates in Google Girl Hackathon 2023.',
    },
    {
      icon: <FaRobot className="text-primary" />,
      text: 'Qualified AWS DeepRacer, earned AWS AI/ML Scholarship, and completed AI Programming in Python and AWS Machine Learning Fundamentals nanodegrees.',
    },
    {
      icon: <FaMedal className="text-primary" />,
      text: 'Consistently ranked in the top 2% of my class; currently ranked 2nd out of 120+ students in my branch.',
    },
    {
      icon: <FaBook className="text-primary" />,
      text: 'Published three research papers, one of which I presented at a conference.',
    },
    {
      icon: <FaLaptopCode className="text-primary" />,
      text: 'Selected as a Beta Microsoft Learn Student Ambassador (MLSA).',
    },
    {
      icon: <FaTrophy className="text-primary" />,
      text: 'Top 10 teams in WiEHack 5.0, an international hybrid hackathon.',
    },
  ];

  return (
    <section className="py-16 text-ink" id="achievements">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl font-semibold mb-10 text-center text-ink">Achievements</h2>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="p-5 bg-surface rounded-2xl border border-line transition-all duration-300 hover:border-primary hover:-translate-y-0.5 flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4"
            >
              {/* Icon */}
              <div className="text-3xl">{achievement.icon}</div>

              <p className="text-base text-ink-soft text-center sm:text-left leading-relaxed">{achievement.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
