"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FaExternalLinkAlt } from "react-icons/fa";

const TAB_DATA = [
    {
        title: "Publications",
        id: "publications",
        content: (
            <div>
                <ul className="list-disc pl-5 space-y-2">
                    {[
                        { name: "Explainable AI techniques used in healthcare", url: "https://pubs.aip.org/aip/acp/article/3121/1/040005/3303044/Explainable-AI-techniques-used-in-healthcare" },
                        { name: "Multimodal machine learning approach for detecting spyware and ransomware", url: "https://ieeexplore.ieee.org/document/10581161" },
                    ].map((item) => (
                        <li key={item.name} className="flex gap-2 items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-400">•</span>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-sm font-medium hover:brightness-125 transition duration-200"
                                >
                                    {item.name}
                                </a>
                            </div>
                            <FaExternalLinkAlt className="w-4 h-4 md:w-3.5 md:h-3.5 text-gray-400 shrink-0" />
                        </li>
                    ))}
                </ul>
            </div>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <div>
                <ul className="list-disc pl-5 space-y-2">
                    {[
                        { name: "AI Programming in Python", url: "https://drive.google.com/file/d/1WzAHBXY2963fZxzArBH12Q0SzfhzX4kQ/view?usp=drive_link" },
                        { name: "AWS ML Fundamentals", url: "https://drive.google.com/file/d/1SdXA2gSXTyB3z0g8vyxOstpmxLeh0CeE/view?usp=drive_link" },
                        { name: "Google Cloud Fundamentals", url: "" },
                        { name: "Git Fundamentals", url: "https://drive.google.com/file/d/1sXgHt7UYfm_HacvZQoUIqzJOb6dlzwH2/view?usp=sharing" },
                        { name: "Introduction to Cloud", url: "https://drive.google.com/file/d/1pv1JnakcQZuxk4yYwYrDfH8TDuZLK4Vt/view?usp=drive_link" },
                        { name: "Kubernetes and Containers", url: "https://drive.google.com/file/d/1Ibgy3bUIkpCbordZJyUyfd6HYWL7igG4/view?usp=drive_link" },
                        { name: "Python Intermediate", url: "https://drive.google.com/file/d/12adHzuicrEg0JNMnXnccqtnffwUIoJAR/view?usp=sharing" },
                        { name: "Python for Beginners", url: "https://drive.google.com/file/d/19Ui_ULHr8abB237E0DZzMnekAGi8UgXk/view?usp=sharing" },
                        { name: "C++", url: "https://drive.google.com/file/d/1s2O1Vtuj7MysM4QTbzJ2zAU2DxPVKvfp/view?usp=sharing" },
                    ].map((item) => (
                        <li key={item.name} className="flex gap-2 items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <span className="text-gray-400">•</span>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-sm font-medium hover:brightness-125 transition duration-200"
                                >
                                    {item.name}
                                </a>
                            </div>
                            <FaExternalLinkAlt className="w-4 h-4 md:w-3.5 md:h-3.5 text-gray-400 shrink-0" />
                        </li>
                    ))}
                </ul>
            </div>
        ),
    },
];

export default function AboutSection() {
    const [tab, setTab] = useState("publications");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id="about" className="text-white">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="flex justify-center md:justify-start w-full">
                    <Image
                        src="/images/about-image.png"
                        width={600}
                        height={600}
                        className="w-full h-auto max-w-[500px] md:max-w-[600px]"
                        alt="About Me"
                    />
                </div>
                <div className="text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I’m a Software Developer at IBM Cloud and an incoming MSCS student at Georgia Tech, specializing in Computing Systems. With a strong background in cloud computing, machine learning, and open-source, I thrive on solving complex problems and building impactful solutions. My journey spans two Google Summer of Code contributions with Apache Beam, where I enhanced its YAML SDK, internships at IBM and NTPC, and multiple research-driven AI/ML projects. I’m passionate about leveraging code, data, and curiosity to create scalable systems and innovative technologies that make a difference.
                    </p>
                    <div className="flex flex-row mt-8 space-x-4">
                        {TAB_DATA.map((tabItem) => (
                            <TabButton
                                key={tabItem.id}
                                selectTab={() => handleTabChange(tabItem.id)}
                                active={tab === tabItem.id}
                            >
                                {tabItem.title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-4">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    );
}
