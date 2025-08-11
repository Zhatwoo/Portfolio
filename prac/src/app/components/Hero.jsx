import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] text-white py-20 px-6 overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-indigo-400/20 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-cyan-500/20 rounded-full animate-float-fast"></div>
      </div>

      {/* Main container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Left - Image */}
        <div className="w-60 h-60 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-500/50 hover:scale-105 transition-transform duration-300">
          <Image
            src="/neodt.jpg" // 📌 replace with your formal picture in public folder
            alt="Neo Dela Torre"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right - Text */}
        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Neo Dela Torre
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-xl">
            Computer Engineering Graduate | Trader  
            Passionate about technology, software development, and market analysis.  
            I aim to bridge innovation and financial strategies to create impactful solutions.
          </p>

          {/* Goals */}
          <ul className="space-y-3 text-gray-300">
            <li>💻 Develop innovative software and embedded systems.</li>
            <li>📈 Apply data-driven strategies in trading and investments.</li>
            <li>🌏 Contribute to tech solutions that help communities.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
