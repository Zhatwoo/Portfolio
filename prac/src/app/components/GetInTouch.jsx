"use client";

import { motion } from "framer-motion";

export default function GetInTouch() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-8 py-20 
                 bg-gradient-to-br from-black via-[#0f172a] to-black 
                 text-white rounded-2xl shadow-xl 
                 border border-gray-700 mt-8 mb-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-6 text-center tracking-tight"
      >
        Get in Touch (WIP)
      </motion.h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
        Feel free to reach out if you want to collaborate, have questions, or just say hello!
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for reaching out! (This is just a demo form.)");
        }}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-gray-800 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-gray-800 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="bg-gray-800 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors text-white font-semibold rounded-md py-3 shadow-lg"
        >
          Send Message
        </button>
      </form>

      {/* Optional contact info */}
      <div className="mt-16 text-center text-gray-400 text-sm space-y-2 max-w-xl mx-auto">
        <p>Email: <a href="mailto:youremail@example.com" className="underline hover:text-white">youremail@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="underline hover:text-white">+1 234 567 890</a></p>
        <p>Location: Philippines</p>
      </div>
    </section>
  );
}

