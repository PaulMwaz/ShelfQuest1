import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaHeart,
  FaStar,
  FaHistory,
  FaBell,
  FaInfoCircle,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Categories", path: "/categories", icon: <FaBook /> },
    { name: "Favorites", path: "/favorites", icon: <FaHeart /> },
    { name: "Recommendations", path: "/recommendations", icon: <FaStar /> },
    { name: "Recently Viewed", path: "/recently-viewed", icon: <FaHistory /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen ${
          isOpen ? "w-60" : "w-16"
        } fixed transition-all duration-300`}
      >
        {/* Logo and Hamburger Menu */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              src="/images/logo.png" // Replace with the actual path to your logo
              alt="BSL"
              className={`w-8 h-8 mr-2 ${!isOpen && "hidden"}`}
            />
            {isOpen && (
              <h2 className="text-xl font-bold">ShelfQuest Library</h2>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            <HiMenuAlt3 />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-4 p-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 rounded ${
                    isActive ? "bg-purple-600" : "hover:bg-purple-400"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                {isOpen && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
