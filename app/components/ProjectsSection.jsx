"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';  

const projectData = [
  {
      id: 10,
      title: "Apache Beam YAML SDK Enhancements",
      description: "Developed Spanner IO and Enrichment Transform providers for Apache Beam's YAML SDK. Enabled reading/writing to Spanner and enriching data in pipelines. Contributed open-source code as part of Google Summer of Code.",
      image: "/images/projects/apache-beam.png",
      tag: ['All', 'Open Source'],
      gitUrl: 'https://github.com/reeba212/apache-beam-yaml-contributions/blob/main/README.md',
      previewUrl: 'https://medium.com/@reebaq2/apache-beam-yaml-features-gsoc-2024-report-c39f01dacc1c'
  },
  {
      id: 9,
      title: "xAI for Breast Cancer Prediction",
      description: "Built an explainable AI model using ResNet-50 and LIME to predict breast cancer with 81.44% accuracy. Published findings in AIP Conference Proceedings.",
      image: "/images/projects/breast-cancer.png",
      tag: ['All', 'AI/ML', 'Computer Vision'],
      gitUrl: 'https://github.com/reeba212/xAI_breast_cancer',
      previewUrl: 'https://medium.com/@reebaq2/computer-vision-using-keras-and-tensorflow-486efbc62904'
  },
  {
      id: 8,
      title: "YouTube Comment Sentiment Analysis",
      description: "Built a bi-directional LSTM model for classifying YouTube comments in real-time using Google Pub/Sub. Achieved 86% accuracy in detecting positive and negative sentiments.",
      image: "/images/projects/youtube-sentiment.png",
      tag: ['All', 'AI/ML', 'NLP', 'Open Source'],
      gitUrl: 'https://github.com/apache/beam/pull/27659',
      previewUrl: 'https://medium.com/@reebaq2/real-world-ml-use-cases-apache-beam-gsoc-2023-report-edeb313d43ba#4ec2'
  },
  {
      id: 7,
      title: "Batch Image Processing with Apache Beam",
      description: "Developed a scalable image classification pipeline using Convolutional Neural Networks (CNN) on CIFAR-10. Integrated TensorFlow with Apache Beam for distributed processing.",
      image: "/images/projects/batch-image-processing.png",
      tag: ['All', 'AI/ML', 'Computer Vision', 'Open Source'],
      gitUrl: 'https://github.com/apache/beam/pull/27034',
      previewUrl: 'https://medium.com/@reebaq2/real-world-ml-use-cases-apache-beam-gsoc-2023-report-edeb313d43ba#6072'
  },
  {
      id: 6,
      title: "Speech Emotion Recognition using CNN & Librosa",
      description: "Extracted audio features with Librosa and classified emotions using a CNN-based model in TensorFlow. Achieved 76% accuracy in identifying emotions from speech datasets.",
      image: "/images/projects/speech-emotion.png",
      tag: ['All', 'AI/ML', 'NLP', 'Open Source'],
      gitUrl: 'https://github.com/apache/beam/pull/28172',
      previewUrl: 'https://medium.com/@reebaq2/real-world-ml-use-cases-apache-beam-gsoc-2023-report-edeb313d43ba#38f1'
  },
  {
    id: 11,
    title: "Personal Portfolio Website",
    description: "Designed and developed a personal portfolio website using React, Tailwind CSS, and Framer Motion. Showcases projects, skills, and achievements with a sleek, responsive UI and smooth animations.",
    image: "/images/projects/portfolio.png",
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/reeba212/portfolio',
    previewUrl: '/'
},
  {
      id: 5,
      title: "IMDB Reviews Sentiment Analysis",
      description: "Built an NLP model using LSTM to analyze IMDB movie reviews. Achieved 88% accuracy in classifying reviews as positive or negative using TensorFlow and word embeddings.",
      image: "/images/projects/imdb-sentiment.png",
      tag: ['All', 'AI/ML', 'NLP'],
      gitUrl: 'https://github.com/reeba212/IMDB_Sentiment_Analysis',
      previewUrl: 'https://medium.com/@reebaq2/natural-language-processing-using-keras-and-tensorflow-32e2158f7f22#7c9a'
  },
  {
      id: 4,
      title: "Energy Optimization with Reinforcement Learning",
      description: "Developed and compared Q-Learning (reward: -1372) and DDPG (reward: -1.28) approaches to maximize comfort and minimize energy consumption on a custom OpenAI Gym environment.",
      image: "/images/projects/energy-optimization.png",
      tag: ['All', 'AI/ML'],
      gitUrl: 'https://github.com/ManuSharma0702/Reinforcement-Learning',
      previewUrl: 'https://www.canva.com/design/DAGhy6qoEyY/otcBn2uAa5rKhTiRwzXfww/edit?utm_content=DAGhy6qoEyY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
      id: 3,
      title: "Causal Relation Extraction for Biomedical Research",
      description: "Developed an NLP pipeline utilizing ColiPalI and RAG-based models to extract causal relationships from biomedical literature. Leveraged Vision Language Models for high-quality document embeddings.",
      image: "/images/projects/biomedical-nlp.png",
      tag: ['All', 'AI/ML', 'NLP'],
      gitUrl: 'https://docs.google.com/document/d/1VWmz13adBLrbo4YN7kv5KQ-iHdHRwijt6AfTbwgRowk/edit?tab=t.0',
      previewUrl: 'https://www.canva.com/design/DAGhy8EGzwI/a-zxuZT0JxPKBG3sNJspQA/edit?utm_content=DAGhy8EGzwI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
      id: 2,
      title: "Feminergy: AI-Powered Female Healthcare App",
      description: "Developed an AI-driven app for women's health tracking, integrating predictive analytics for menstrual cycles and fitness recommendations. Used TensorFlow for anomaly detection and Flutter for UI.",
      image: "/images/projects/feminergy.png",
      tag: ['All', 'AI/ML'],
      gitUrl: 'https://github.com/shivamkotalia14/feminergy',
      previewUrl: 'https://www.canva.com/design/DAGhy9MYTAc/UOOf810I7hlolF2Stzx0ig/edit?utm_content=DAGhy9MYTAc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
  },
  {
      id: 1,
      title: "DocHome: NLP-Based Self-Diagnosis Web App",
      description: "Created an NLP-powered chatbot using NLTK and Sklearn’s MLPClassifier to predict diseases based on symptoms. Achieved 90% accuracy and was recognized among the Top 10 projects at a tech fest.",
      image: "/images/projects/doc-home.png",
      tag: ['All', 'AI/ML', 'NLP', 'Web'],
      gitUrl: 'https://github.com/Vaijayanthi-Sambath-Kumar/DocHome',
      previewUrl: 'https://docs.google.com/presentation/d/10WZ6ROMJ5BPOceCQSgfp9BaVaRO5ptru/edit?usp=sharing&ouid=108693220121936991992&rtpof=true&sd=true'
  }
];


const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsSection() {
  const [tag, setTag] = useState('All');
  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projectData.filter((project) => tag === 'All' || project.tag.includes(tag));

  return (
    <section id="projects" className="bg-[#121212] text-white">
      <div className="px-4 md:px-8 lg:px-12 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6">
          {['All', 'AI/ML', 'Web', 'Computer Vision', 'NLP', 'Open Source'].map((item) => (
            <ProjectTag
              key={item}
              onClick={() => handleTagChange(item)}
              name={item}
              isSelected={tag === item}
            />
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
          key={tag} // Ensures re-animation when tag changes
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
