import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const BookCard = ({ book, onFavorite, onView, isViewing }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative flex flex-col h-full p-2">
      {/* Image Section */}
      <div className="h-44 w-full overflow-hidden flex-shrink-0">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="mt-2 flex flex-col justify-between flex-grow">
        {/* Title and Category */}
        <div>
          <h2 className="text-sm font-bold mb-1 truncate text-center">
            {book.title}
          </h2>
          <p className="text-gray-600 text-xs text-center truncate">
            {book.category}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-3 justify-center">
          <button
            onClick={onFavorite}
            className="flex items-center justify-center gap-2 px-3 py-1.5 bg-purple-600 text-white rounded-md text-xs hover:animate-glowing transition-all"
          >
            <FaHeart className="text-xs" />
            Favorite
          </button>
          <button
            onClick={onView}
            className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-md text-xs text-white transition-all hover:animate-glowing ${
              isViewing
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <FaEye className="text-xs" />
            {isViewing ? "Close" : "View"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
