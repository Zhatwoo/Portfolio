export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-8 py-20 
                 bg-gradient-to-br from-black via-[#0f172a] to-black 
                 text-white rounded-2xl shadow-xl 
                 border border-gray-700 mt-8 mb-8"
    >
      <h2 className="text-4xl font-bold text-white mb-6 text-center tracking-tight">
        Projects <span className="text-blue-400 text-lg font-normal"></span>
      </h2>

      {/* Tanggalin itong blue underline div para walang underline */}
      {/* <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div> */}

      <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        A curated selection of my academic and personal engineering projects,
        web development builds, and creative solutions.  
        <br />Stay tuned as I continue to expand this section.
      </p>
    </section>
  );
}
