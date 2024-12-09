import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* About Text */}
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-8">
        Welcome to ShelfQuest, your ultimate book search library application.
        Our mission is to make finding and managing your favorite books
        enjoyable and effortless. With ShelfQuest, you can explore various book
        categories, mark your favorites, and track your recently viewed books
        with ease.
      </p>

      {/* About Image */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/about-us.jpg" // Ensure the image is placed in the public/images directory
          alt="About Us"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6">
        <button className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-all">
          <FaFacebook className="text-2xl" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full shadow-md hover:bg-blue-500 transition-all">
          <FaTwitter className="text-2xl" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition-all">
          <FaInstagram className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default About;
