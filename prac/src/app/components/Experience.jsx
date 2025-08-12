"use client";

import { useRef, useState } from "react";

export default function Experience() {
  const experiences = [
    { company: "Inspire Alliance Fund Group", role: "Software Developer", period: "July 18, 2025 - Present" },
    { company: "Dr Yanga Colleges Inc", role: "Robotics Intern", period: "April 2025 - May 2025" },
    { company: "Shaglani Trading Corp", role: "Intern / Tech Support / Office Staff", period: "Feb 2025 - April 2025" },
    { company: "Financial Market Fund Manage", role: "Self-employed Client Based", period: "Ongoing" },
    { company: "Computer Services", role: "Self-employed", period: "2024" },
    { company: "Lalamove", role: "Delivery Rider", period: "2023 - 2024" },
    { company: "Puregold", role: "Sales Assistant", period: "April 2022 - May 2022" },
  ];

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationFrame = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX || e.touches?.[0]?.pageX;
    scrollLeft.current = scrollRef.current.scrollLeft;
    cancelAnimationFrame(animationFrame.current);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    setDragging(false);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX || e.touches?.[0]?.pageX;
    const walk = x - startX.current;

    cancelAnimationFrame(animationFrame.current);
    animationFrame.current = requestAnimationFrame(() => {
      scrollRef.current.scrollLeft = scrollLeft.current - walk * 1;
    });
  };

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-8 py-20
                 bg-gradient-to-br from-black via-[#0f172a] to-black
                 text-white rounded-2xl shadow-xl
                 border border-gray-700 mt-8 mb-8"
    >
      <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
        Experience
      </h2>

      <div
        ref={scrollRef}
        className={`flex overflow-x-auto space-x-6 max-w-full px-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-900
                    ${dragging ? "cursor-grabbing select-none" : "cursor-grab select-auto"}`}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerMove={handlePointerMove}
      >
        {experiences.map(({ company, role, period }, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white/10 rounded-xl p-8 border border-blue-500 shadow-md snap-center
                       flex flex-col justify-between cursor-pointer min-h-[220px]"
          >
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-white">{role}</h3>
              <p className="text-blue-400 font-medium mb-4">{company}</p>
            </div>
            <p className="text-gray-400 italic text-sm">{period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
