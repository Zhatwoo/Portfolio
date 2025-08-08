// src/app/page.js

import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/projects";
export default function Home() {
  return (
    <div>
      <Projects />
      <PersonalInfo />
    </div>
  );
}
