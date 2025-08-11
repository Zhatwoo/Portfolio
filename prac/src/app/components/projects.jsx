export default function Projects() {
  return (
    <section
      // ✅ Keep a clear and unique ID for smooth scrolling from header
      id="projects"

      // ✅ Improved spacing & padding for better visual balance
      className="max-w-6xl mx-auto px-8 py-20 
                 bg-gradient-to-br from-black via-[#0f172a] to-black 
                 text-white rounded-2xl shadow-xl 
                 border border-gray-700 mt-8 mb-8"
    >
      {/* ✅ More professional heading styling */}
      <h2 className="text-4xl font-bold text-white mb-6 text-center tracking-tight">
        Projects <span className="text-blue-400 text-lg font-normal">(WIP)</span>
      </h2>

      {/* ✅ Optional subtle divider for visual separation */}
      <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

      {/* ✅ Improved description text readability */}
      <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        A curated selection of my academic and personal engineering projects,
        web development builds, and creative solutions.  
        <br />Stay tuned as I continue to expand this section.
      </p>
    </section>
  );
}
