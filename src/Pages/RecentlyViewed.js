import React from "react";
import BookCard from "../Components/BookCard";

const RecentlyViewed = ({
  recentlyViewed,
  removeFromRecentlyViewed,
  hideMessage,
}) => {
  // Don't show the message if hideMessage is true
  if (!recentlyViewed.length && hideMessage) {
    return null;
  }

  // Show the "No recently viewed books yet." message only when hideMessage is false
  if (!recentlyViewed.length && !hideMessage) {
    return (
      <div className="text-gray-500 text-center">
        No recently viewed books yet.
      </div>
    );
  }

  return (
    <div className="w-full">
      {hideMessage ? null : (
        <h1 className="text-2xl font-bold mb-4">Recently Viewed</h1>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recentlyViewed.map((book) => (
          <div key={book.id} className="relative">
            <BookCard book={book} />
            <button
              onClick={() => removeFromRecentlyViewed(book.id)}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2"
              title="Remove from Recently Viewed"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
