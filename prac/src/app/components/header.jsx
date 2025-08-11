"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🆕 Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // prevent default jump
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // smooth scroll effect
        block: "start",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] via-[#1e3a5f] to-[#0f172a] text-gray-100 shadow-sm border-b border-[#1e293b] transition-transform duration-500 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-6">
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <img
            src="/neodt.jpg"
            alt="Neo A. Dela Torre"
            className="w-10 h-10 rounded-full border border-gray-700 object-cover"
          />
          <div>
            <h1 className="font-bold tracking-tight text-xl">
              Neo A. Dela Torre
            </h1>
            <p className="text-gray-400 text-sm">Computer Engineer</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-300">
          {/* 🆕 Added smooth scroll handler */}
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="hover:text-white transition-colors duration-200"
          >
            My Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hover:text-white transition-colors duration-200"
          >
            Get in Touch (WIP)
          </a>
        </nav>
      </div>
    </header>
  );
}
