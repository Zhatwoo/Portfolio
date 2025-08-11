// src/app/page.js
import Hero from "./components/Hero";
import TechnicalSkills from "./components/TechnicalSkills";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Technical Skills */}
      <TechnicalSkills />

      {/* Projects */}
      <Projects />

      {/* Personal Info */}
      <PersonalInfo />
    </div>
  );
}
