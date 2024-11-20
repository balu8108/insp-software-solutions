import React from "react";
import heroBackground from "../assets/hero-background.jpg"; // Adjust the path if needed

const Hero = () => {
  return (
      <div
          className="bg-blue-900 text-white text-center py-20 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
      >
        <div className="bg-black bg-opacity-50 py-10 px-4 rounded-lg inline-block">
          <h1 className="text-5xl font-bold mb-6">Welcome to INSP Software Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Providing innovative and scalable software solutions tailored to your business needs.
          </p>
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow-md hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </div>
  );
};

export default Hero;
