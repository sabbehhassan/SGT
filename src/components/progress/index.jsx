import menImage from "../../assets/progress_pic/men.png";
import React, { useState, useEffect } from "react";

const ProgressView = () => {
  const [stats, setStats] = useState([
    {
      label: "Projects Completed",
      target: 89,
      currentValue: 0,
      color: "#4F46E5",
    },
    {
      label: "Satisfied Clients",
      target: 23,
      currentValue: 0,
      color: "#EC4899",
    },
    { label: "Awards Won", target: 7, currentValue: 0, color: "#F59E0B" },
    { label: "Team Members", target: 11, currentValue: 0, color: "#10B981" },
  ]);

  useEffect(() => {
    stats.forEach((stat, index) => {
      const increment = Math.ceil(stat.target / 100);
      const interval = setInterval(() => {
        setStats((prevStats) => {
          const newStats = [...prevStats];
          if (newStats[index].currentValue < newStats[index].target) {
            newStats[index].currentValue += increment;
            if (newStats[index].currentValue > newStats[index].target) {
              newStats[index].currentValue = newStats[index].target;
            }
          } else {
            clearInterval(interval);
          }
          return newStats;
        });
      }, 20);
    });
  });

  return (
    <section className="py-20 px-5 bg-gradient-to-r from-indigo-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our <span className="text-indigo-600">Achievements</span>
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Check out how we’ve grown over the years. These metrics reflect our
          dedication and commitment to delivering excellence.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="md:flex-1 flex justify-center">
            <img
              src={menImage}
              alt="Progress Illustration"
              className="rounded-xl w-full max-w-md shadow-xl object-cover"
            />
          </div>

          {/* Stats */}
          <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition relative overflow-hidden"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-3">
                  {stat.currentValue}
                </h3>
                <p className="text-gray-500 font-medium mb-4">{stat.label}</p>
                {/* Progress Bar */}
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${(stat.currentValue / stat.target) * 100}%`,
                      backgroundColor: stat.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressView;
