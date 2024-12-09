import React from "react";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="animate-slide">
        <div className="slide">
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
      </div>

      {/* Overlay for Gradient Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Welcome Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Shelf Quest</h1>
        <p className="text-lg md:text-xl max-w-xl">
          Welcome to Shelf Quest Library! Discover and explore your favorite
          books from a wide range of categories.
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full bg-gray-800 text-white text-center py-4">
        <p className="text-sm md:text-base">©ShelfQuest-Group5Creations-2024</p>
      </footer>
    </div>
  );
};

export default Home;
