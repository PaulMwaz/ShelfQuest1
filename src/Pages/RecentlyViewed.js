import React from "react";
import BookCard from "../Components/BookCard";

const RecentlyViewed = ({ recentlyViewed }) => {
  if (!recentlyViewed.length) {
    return <div className="text-gray-500">No recently viewed books yet.</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recently Viewed</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recentlyViewed.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
