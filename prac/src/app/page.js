// src/app/page.js
import Hero from "./components/Hero";
import TechnicalSkills from "./components/TechnicalSkills";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/projects";
import GetInTouch from "./components/GetInTouch";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Technical Skills */}
      <TechnicalSkills />

      <Experience/>

      {/* Projects */}
      <Projects />

      {/* Personal Info */}
      <PersonalInfo />

      <GetInTouch/>
    </div>
  );
}
