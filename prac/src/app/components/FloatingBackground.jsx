export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      
      {/* === Blobs === */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-500 opacity-30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-25 rounded-full blur-3xl animate-float-fast"
           style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-pink-400 opacity-20 rounded-full blur-2xl animate-float-slow"
           style={{ animationDelay: "3s" }}></div>

      {/* === Glowing Rings === */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 border border-cyan-400 opacity-20 rounded-full animate-rotate-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 border border-purple-300 opacity-15 rounded-full animate-rotate-slow"
           style={{ animationDuration: "40s" }}></div>

      {/* === Soft Glow Particles === */}
      <div className="absolute top-1/2 left-10 w-6 h-6 bg-white opacity-10 rounded-full blur-md animate-float-fast"
           style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/4 right-1/2 w-8 h-8 bg-white opacity-10 rounded-full blur-lg animate-float-slow"
           style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-10 right-1/3 w-4 h-4 bg-white opacity-15 rounded-full blur-sm animate-float-fast"
           style={{ animationDelay: "4s" }}></div>

      {/* === Polygon Shape (Hexagon) === */}
      <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-yellow-300 opacity-20 blur-md animate-rotate-slow"
           style={{
             clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
           }}></div>
    </div>
  );
}
