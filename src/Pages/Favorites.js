import React from "react";
import { FaTrash } from "react-icons/fa";
import BookCard from "../Components/BookCard";

const Favorites = ({ favorites, removeFromFavorites }) => {
  if (!favorites.length) {
    return <div className="text-gray-500">No favorite books yet.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((book) => (
          <div key={book.id} className="relative">
            {/* Book Card */}
            <BookCard book={book} />

            {/* Delete Button */}
            <button
              onClick={() => removeFromFavorites(book.id)}
              className="absolute top-2 right-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
