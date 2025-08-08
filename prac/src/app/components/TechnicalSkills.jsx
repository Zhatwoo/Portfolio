import { Cpu, Code, Globe, Settings, Database } from "lucide-react";

export default function TechnicalSkills() {
  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-300" />,
      items: ["C++", "Python", "JavaScript", "Java"],
    },
    {
      category: "Web Development",
      icon: <Globe className="w-6 h-6 text-green-300" />,
      items: ["HTML", "Tailwind CSS", "React.js", "Next.js"],
    },
    {
      category: "Hardware & Embedded Systems",
      icon: <Cpu className="w-6 h-6 text-purple-300" />,
      items: ["Arduino", "Esp32", "Microcontrollers"],
    },
    {
      category: "Databases & Backend",
      icon: <Database className="w-6 h-6 text-yellow-300" />,
      items: ["MySQL", "MongoDB", "Node.js", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      icon: <Settings className="w-6 h-6 text-pink-300" />,
      items: ["Git & GitHub", "VS Code", "AutoCad", "Windows"],
    },
  ];

  return (
    <section
      className="max-w-6xl mx-auto px-10 py-14
                 bg-gradient-to-br from-black via-[#0f172a] to-black
                 text-white shadow-xl rounded-2xl
                 border border-gray-700
                 mt-32 mb-15" // ⬅️ CHANGED: mt-32 for bigger gap from header, mb-32 for bigger gap before projects
    >
      {/* 🔹 Heading */}
      <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
        Technical Skills
      </h2>

      {/* 🔹 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-[#1e293b] rounded-xl p-6
                       bg-[#0f172a]/30
                       flex flex-col items-start space-y-4
                       transform transition-all duration-500 ease-in-out
                       hover:scale-[1.03] hover:shadow-xl hover:border-blue-400/40 hover:bg-[#1e293b]/50"
          >
            {/* Icon with hover effect */}
            <div className="p-3 bg-[#1e293b] rounded-full shadow-md
                            transition-colors duration-500 ease-in-out
                            hover:shadow-blue-400/50">
              {skill.icon}
            </div>

            {/* Category Title */}
            <h3 className="text-lg font-semibold text-white">{skill.category}</h3>

            {/* Skills List */}
            <ul className="text-gray-300 space-y-1">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
