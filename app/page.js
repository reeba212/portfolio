import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
import EducationSection from "./components/EducationSection";
import HighlightsSection from "./components/HighlightsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <HighlightsSection/>
        <AboutSection/>
        <Experiences/>
        <EducationSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <AchievementsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}