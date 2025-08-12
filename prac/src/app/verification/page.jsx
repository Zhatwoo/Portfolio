"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VerificationPage() {
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const handleContinue = () => {
    if (!selected) return alert("Please select an option.");

    setLoading(true);

    setTimeout(() => setShowThanks(true), 300);
    setTimeout(() => {
      setShowThanks(false);
      setShowLoading(true);
    }, 1500);
    setTimeout(() => {
      document.cookie = `visitorType=${selected}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      window.location.href = "/";
    }, 3000);
  };

  const options = [
    { label: "Student", value: "student" },
    { label: "Corporate", value: "corporate" },
    { label: "Other", value: "other" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#334155] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 max-w-md w-full p-10"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl font-semibold text-white mb-4 tracking-tight text-center"
        >
          Welcome!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-gray-300 text-center mb-10 text-lg leading-relaxed"
        >
          Please select your purpose for viewing this portfolio.
        </motion.p>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.button
              key={option.value}
              onClick={() => setSelected(option.value)}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
              className={`w-full py-4 rounded-xl text-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 ${
                selected === option.value
                  ? "bg-blue-600 text-white shadow-lg border border-blue-500"
                  : "bg-transparent border border-gray-600 text-gray-300 hover:bg-blue-700 hover:text-white"
              } ${loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            >
              {option.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={handleContinue}
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.07, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.5)" }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          className={`mt-10 w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 ${
            loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          Continue
        </motion.button>

        {/* THANK YOU MESSAGE */}
        <AnimatePresence>
          {showThanks && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="mt-8 text-center px-6 py-3 bg-blue-700 bg-opacity-90 rounded-xl shadow-lg"
            >
              <p className="text-white text-lg font-semibold select-none animate-pulse">
                Thank you for your time! Preparing your experience...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LOADING SPINNER */}
        <AnimatePresence>
          {showLoading && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center mt-8"
              aria-live="polite"
              aria-label="Loading animation"
            >
              <motion.div
                className="w-16 h-16 rounded-full border-4 border-t-transparent border-indigo-400"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 1.3,
                }}
              />
              <p className="text-white mt-5 font-semibold tracking-wide text-sm select-none">
                Loading your experience...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
