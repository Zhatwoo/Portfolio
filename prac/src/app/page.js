// src/app/page.js
import TechnicalSkills from "./components/TechnicalSkills";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/projects";
export default function Home() {
  return (
    <div>
      <TechnicalSkills />
      {/* 🆕 Add Personal Info section */}
      <Projects />
      <PersonalInfo />

    </div>
  );
}
