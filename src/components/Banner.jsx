import React from "react";

const Banner = () => {
  return (
    <div className=" bg-indigo-400 text-white py-12 text-center">
      <div className="mb-4 text-sm font-semibold uppercase tracking-wide">
      Control in Style 
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
      Manage. Monitor. Elevate.
      </h1>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        Empowering you with seamless control and real-time insights to streamline your operations and redefine efficiency. Step into your role with ease today!
      </p>
      <button className="bg-white text-indigo-800 py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition">
        Let's Explore →
      </button>
    </div>
  );
};

export default Banner;


