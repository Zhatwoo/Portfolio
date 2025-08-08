import { Mail, Phone, MapPin, Briefcase, User } from "lucide-react";

export default function PersonalInfo() {
  return (
    <section
      className="max-w-6xl mx-auto px-10 py-14 
                 bg-gradient-to-br from-black via-[#0f172a] to-black 
                 text-white shadow-xl rounded-2xl 
                 border border-gray-700 
                 mt-15 mb-15 transition-all duration-300" // ✅ ADDED `mt-24` here
    >
      {/* 🔹 Heading made larger and spaced more */}
      <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">
        Personal Information
      </h2>

      {/* 🔹 Grid spacing increased for a more open feel */}
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 text-sm">
        <InfoRow
          icon={<User className="w-5 h-5 text-blue-300" />}
          label="Full Name"
          value="Neo A. Dela Torre"
        />
        <InfoRow
          icon={<Mail className="w-5 h-5 text-blue-300" />}
          label="Email Address"
          value="ndelatorre08252002@gmail.com"
        />
        <InfoRow
          icon={<Phone className="w-5 h-5 text-blue-300" />}
          label="Contact Number"
          value="+63 9457 738 411"
        />
        <InfoRow
          icon={<MapPin className="w-5 h-5 text-blue-300" />}
          label="Location"
          value="Bocaue, Bulacan, Philippines"
        />
        <InfoRow
          icon={<Briefcase className="w-5 h-5 text-blue-300" />}
          label="Profession"
          value="Computer Engineer"
        />
      </dl>
    </section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div
      className="flex items-start space-x-4 
                 border border-[#1e293b] rounded-xl 
                 p-4 bg-[#0f172a]/30"
    >
      {/* 🔹 Background added for icon container */}
      <div className="p-2 bg-[#1e293b] rounded-full shadow">
        {icon}
      </div>
      <div>
        <dt className="text-sm font-semibold text-gray-400">{label}</dt>
        <dd className="text-base font-medium text-white mt-1">{value}</dd>
      </div>
    </div>
  );
}
