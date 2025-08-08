"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // You can adjust this threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0f172a] via-[#1e3a5f] to-[#0f172a] text-gray-100 shadow-sm border-b border-[#1e293b] transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between transition-all duration-300 ${
          isScrolled ? "space-y-2 sm:space-y-0" : "space-y-4 sm:space-y-0"
        }`}
      >
        {/* Profile Info */}
        <div className="flex items-center space-x-4">
          <img
            src="/neo.jpg"
            alt="Neo A. Dela Torre"
            className={`rounded-full border border-gray-700 object-cover transition-all duration-300 ${
              isScrolled ? "w-6 h-6" : "w-12 h-12"
            }`}
          />
          <div>
            <h1
              className={`transition-all duration-300 font-bold tracking-tight ${
                isScrolled ? "text-xl" : "text-2xl"
              }`}
            >
              Neo A. Dela Torre
            </h1>
            <p
              className={`text-gray-400 transition-all duration-300 ${
                isScrolled ? "text-xs" : "text-sm"
              }`}
            >
              Computer Engineer 
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-sm font-medium text-gray-300">
          <a
            href="#projects"
            className="hover:text-white transition-colors duration-200"
          >
            My Projects (WIP)
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors duration-200"
          >
            Get in Touch (WIP)
          </a>
        </nav>
      </div>
    </header>
  );
}
