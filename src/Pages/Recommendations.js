import React from "react";
import BookCard from "../Components/BookCard";

const Recommendations = ({ favorites }) => {
  if (!favorites.length) {
    return (
      <div className="text-gray-500">
        You have not marked any books as favorites yet.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recommended for You</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
