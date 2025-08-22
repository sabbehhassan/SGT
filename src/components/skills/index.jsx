import React from "react";

const SkillsView = () => {
  const skills = [
    { name: "Web Development", icon: "code" },
    { name: "AI & ML", icon: "android" },
    { name: "App Development", icon: "phone_android" },
    { name: "Graphic Design", icon: "brush" },
    { name: "Amazon", icon: "shopping_cart" },
    { name: "Trading", icon: "trending_up" },
    { name: "Bookkeeping", icon: "book" },
    { name: "WalMart", icon: "store" },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Here are Numerous Topics That <br />
          <span className="text-cyan-600">Will Enhance Your Skills</span>
        </h2>
        <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Explore a wide range of professional skill sets designed to boost your
          career and help you stay ahead in the tech industry.
        </p>

        {/* Skills Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white h-72 w-64 rounded-2xl shadow-lg p-8 flex flex-col 
                         justify-between items-center hover:shadow-2xl 
                         hover:-translate-y-2 transform transition"
            >
              <span className="material-icons text-cyan-500 text-7xl mb-3">
                {skill.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <button
                className="mt-4 bg-cyan-600 text-white px-6 py-2.5 rounded-lg 
                           font-medium hover:bg-cyan-500 transition"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsView;
