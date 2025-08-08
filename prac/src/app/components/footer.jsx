// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-6 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

