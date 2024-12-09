import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard";

const Categories = ({ addToFavorites, viewBook, viewedBook }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to load books.");
      });
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex">
      {/* Books in the center */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
          viewedBook ? "flex-grow md:w-2/3" : "w-full"
        }`}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onFavorite={() => addToFavorites(book)}
            onView={() => viewBook(book)}
            isViewing={viewedBook?.id === book.id}
          />
        ))}
      </div>

      {/* Viewed Book on the right */}
      {viewedBook && (
        <div className="w-full md:w-1/3 p-4 bg-white shadow-md h-screen overflow-y-auto fixed right-0">
          <h1 className="text-2xl font-bold mb-4">{viewedBook.title}</h1>
          <img
            src={viewedBook.image}
            alt={viewedBook.title}
            className="w-full h-64 object-cover mb-4"
          />
          <p className="text-gray-600 mb-4">{viewedBook.category}</p>
          <p className="text-gray-700">
            This book is a captivating blend of adventure, knowledge, or
            creativity, tailored to engage readers of all backgrounds. It dives
            into key themes or topics, offering unique perspectives, practical
            insights, or thrilling narratives. Perfect for those interested in
            specific genres or subjects, it delivers a rewarding experience
            through rich storytelling, detailed analysis, or actionable advice.
            Whether you’re looking to learn, escape, or be inspired, this title
            has something special to offer. Embark on a journey that will leave
            you with new ideas, unforgettable moments, or valuable skills.
          </p>
        </div>
      )}
    </div>
  );
};

export default Categories;
