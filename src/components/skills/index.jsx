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
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Here are Numerous Topics That <br />{" "}
          <span className="text-cyan-600">Will Enhance Your Skills</span>
        </h2>
        <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          Explore a wide range of professional skill sets designed to boost your
          career and help you stay ahead in the tech industry.
        </p>

        {/* Skills Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center 
                         hover:shadow-xl hover:-translate-y-2 transform transition"
            >
              <span className="material-icons text-cyan-500 text-6xl mb-4">
                {skill.icon}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {skill.name}
              </h3>
              <button
                className="mt-auto bg-cyan-600 text-white px-5 py-2 rounded-lg 
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
