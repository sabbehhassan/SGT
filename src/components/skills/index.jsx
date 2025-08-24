import React from "react";
import {
  FaCode,
  FaBrain,
  FaMobileAlt,
  FaPaintBrush,
  FaAmazon,
  FaChartLine,
  FaBook,
  FaStore,
} from "react-icons/fa";

const SkillsView = () => {
  const skills = [
    {
      name: "Web Development",
      icon: <FaCode className="text-6xl text-indigo-600" />,
    },
    { name: "AI & ML", icon: <FaBrain className="text-6xl text-purple-600" /> },
    {
      name: "App Development",
      icon: <FaMobileAlt className="text-6xl text-blue-600" />,
    },
    {
      name: "Graphic Design",
      icon: <FaPaintBrush className="text-6xl text-pink-500" />,
    },
    { name: "Amazon", icon: <FaAmazon className="text-6xl text-orange-500" /> },
    {
      name: "Trading",
      icon: <FaChartLine className="text-6xl text-green-600" />,
    },
    {
      name: "Bookkeeping",
      icon: <FaBook className="text-6xl text-yellow-500" />,
    },
    { name: "WalMart", icon: <FaStore className="text-6xl text-red-500" /> },
  ];

  return (
    <section className="bg-gradient-to-b from-indigo-100 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Master <span className="text-indigo-600">Essential Skills</span>
        </h2>
        <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Unlock a world of opportunities by exploring topics tailored for your
          growth. Each skill helps you stay ahead of the curve in today’s fast
          evolving industry.
        </p>

        {/* Desktop Grid */}
        <div className="hidden lg:grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mt-10 overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-5 px-5 hide-scrollbar">
          {skills.map((skill, index) => (
            <div key={index} className="flex-shrink-0 snap-center">
              <SkillCard skill={skill} mobile />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, mobile }) => {
  // 👇 Google Form link (replace with your own form link)
  const googleFormLink = "https://forms.gle/your-google-form-id";

  return (
    <div
      className={`
        group bg-white h-80 ${mobile ? "w-72 sm:w-80" : "w-64"} 
        rounded-2xl shadow-sm hover:shadow-lg p-8 flex flex-col justify-between items-center 
        hover:-translate-y-1 transform transition relative overflow-hidden
      `}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>

      {/* Icon */}
      <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 relative z-10">
        {skill.name}
      </h3>

      {/* Button */}
      <a
        href={googleFormLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white 
                   px-6 py-2.5 rounded-xl font-medium hover:from-red-500 hover:to-orange-500 
                   transition relative z-10"
      >
        Get Started
      </a>
    </div>
  );
};

export default SkillsView;
