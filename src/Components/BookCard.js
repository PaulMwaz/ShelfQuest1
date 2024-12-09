import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";

const BookCard = ({ book, onFavorite, onView, isViewing }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 truncate">{book.title}</h2>
        <p className="text-gray-600 truncate">{book.category}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={onFavorite}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            <FaHeart />
            Favorite
          </button>
          <button
            onClick={onView}
            className={`flex items-center gap-2 px-4 py-2 ${
              isViewing ? "bg-gray-400" : "bg-blue-600"
            } text-white rounded hover:bg-blue-700`}
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
