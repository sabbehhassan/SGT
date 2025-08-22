import React from "react";
import heroImage from "../../assets/slidesshow/slide1.jpg"; // apni image use karo

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Building Innovative <br />
            <span className="text-cyan-300">Software Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            We empower businesses with cutting-edge web, mobile, and AI-driven
            applications that accelerate growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
              Get Started
            </button>
            <button className="border border-white text-orange-500 px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="flex-1 mt-12 lg:mt-0">
          <img
            src={heroImage}
            alt="Software Development"
            className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
