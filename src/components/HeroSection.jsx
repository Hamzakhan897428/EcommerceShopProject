import React from "react";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="flex items-center justify-between px-10 py-16 bg-gray-100">
      
      {/* Left Side */}
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold mb-6">
          We Care About Daily Loads
        </h1>

        <h3 className="text-lg text-gray-600 mb-6">
          Dimension of reality that makes change possible and understandable.
          An indefinite and homogeneous environment in which natural events
          and human existence take place.
        </h3>
       
       <Link to="/shop" > 
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
          Shop Now
        </button>
       </Link>
      </div>

      {/* Right Side */}
      <div>
        <img
          className="w-80 h-80 object-cover rounded-2xl"
          src="/2.jpg"
          alt="Hero"
        />
      </div>
    </div>
  );
}
export default HeroSection;