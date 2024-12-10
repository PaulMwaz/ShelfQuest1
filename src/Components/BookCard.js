import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const BookCard = ({ book, onFavorite, onView, isViewing }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative flex flex-col h-full">
      {/* Image Section */}
      <div className="h-48 w-full overflow-hidden flex-shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        {/* Title and Category */}
        <div>
          <h2 className="text-lg font-bold mb-2 truncate text-center">
            {book.title}
          </h2>
          <p className="text-gray-600 text-sm text-center truncate">
            {book.category}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 justify-center">
          <button
            onClick={onFavorite}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700 transition-all"
          >
            <FaHeart />
            Favorite
          </button>
          <button
            onClick={onView}
            className={`flex items-center gap-2 px-4 py-2 text-sm text-white rounded-md transition-all ${
              isViewing
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <FaEye />
            {isViewing ? "Close" : "View"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
