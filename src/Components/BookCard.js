import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BookCard = ({ book, onFavorite, onView, isViewing }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative flex flex-col">
      {/* Book Image */}
      <div className="h-48 w-full overflow-hidden">
        <LazyLoadImage
          src={book.image}
          alt={book.title}
          effect="blur" // Apply blur effect during loading
          className="w-full h-full object-cover"
          placeholderSrc="https://via.placeholder.com/150" // Fallback placeholder
        />
      </div>

      {/* Book Details */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2 truncate">{book.title}</h2>
          <p className="text-gray-600 truncate">{book.category}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={onFavorite}
            className="flex-1 flex items-center justify-center gap-2 px-2 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 text-sm"
          >
            <FaHeart />
            Favorite
          </button>
          <button
            onClick={onView}
            className={`flex-1 flex items-center justify-center gap-2 px-2 py-2 text-white rounded text-sm ${
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
