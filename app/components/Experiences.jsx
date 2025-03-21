import React from 'react';

const experiences = [
  {
    company: 'IBM',
    role: 'Software Development Engineer Intern',
    duration: 'Jan 2025 - Jun 2025',
    techStack: ['Ansible', 'Chef', 'Automation'],
    description: [
      'Worked with the Load Balancer team on Citrix SDX and load balancing solutions.',
      'Focused on automating infrastructure processes with Ansible.'
    ]
  },
  {
    company: 'Apache Software Foundation',
    role: 'Google Summer of Code Contributor',
    duration: 'May 2024 - Aug 2024',
    techStack: ['SpannerIO', 'Beam YAML', 'GCP', 'Python', 'Java'],
    description: [
      'Integrated SpannerIO connectors into Beam YAML using cross-language transforms.',
      'Added Enrichment Transform in Python for four Google Cloud Platform services.',
      'Created use cases and tests to ensure functionality and reliability.'
    ]
  },
  {
    company: 'Apache Software Foundation',
    role: 'Google Summer of Code Contributor',
    duration: 'May 2023 - Sep 2023',
    techStack: ['CNN', 'LSTM', 'Librosa', 'NLP', 'Speech Processing', 'TensorFlow'],
    description: [
      'Implemented CNN for image classification on CIFAR-10, achieving 89% accuracy.',
      'Built a YouTube comment classifier with bi-directional LSTM, reaching 86% accuracy.',
      'Developed a speech emotion recognition model using Librosa and CNN, achieving 76% accuracy.'
    ]
  },
  {
    company: 'NTPC Limited',
    role: 'Data Analytics Intern',
    duration: 'Jun 2023 - Aug 2023',
    techStack: ['Power BI', 'Microsoft SQL Server', 'Data Analytics'],
    description: [
      'Created Power BI dashboards for power plant and renewable energy metrics.',
      'Performed data mining from Microsoft SQL Server to support business decisions.'
    ]
  }
];

const Experiences = () => {
  return (
    <section className="py-12 bg-[#181818]" id="experiences">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#181818] p-6 rounded-lg shadow-md hover:shadow-purple-500 hover:scale-105 transition-all duration-300 border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-semibold">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 sm:mt-0">{exp.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="bg-gradient-to-r from-purple-400 to-pink-400 text-white text-xs font-medium px-2 py-1 rounded-lg">{tech}</span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
