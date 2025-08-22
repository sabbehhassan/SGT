import React from "react";

const teamMembers = [
  { name: "John Doe", role: "CEO", img: "https://i.pravatar.cc/150?img=1" },
  { name: "Jane Smith", role: "CTO", img: "https://i.pravatar.cc/150?img=2" },
  { name: "Mark Wilson", role: "CFO", img: "https://i.pravatar.cc/150?img=3" },
  {
    name: "Sophia Lee",
    role: "Designer",
    img: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "David Kim",
    role: "Developer",
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Emily Davis",
    role: "Marketing",
    img: "https://i.pravatar.cc/150?img=6",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Meet Our Team
        </h2>

        {/* CEO */}
        <div className="flex justify-center mb-12">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-64 hover:scale-105 transition-transform">
            <img
              src={teamMembers[0].img}
              alt={teamMembers[0].name}
              className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{teamMembers[0].name}</h3>
            <p className="text-indigo-600">{teamMembers[0].role}</p>
          </div>
        </div>

        {/* 2 Members Row (Narrower) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-12 max-w-3xl mx-auto">
          {teamMembers.slice(1, 3).map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 w-64 mx-auto hover:scale-105 transition-transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
            </div>
          ))}
        </div>

        {/* 3 Members Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 w-64 mx-auto hover:scale-105 transition-transform"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
