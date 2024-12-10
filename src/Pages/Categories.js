import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard"; // BookCard is in the Components folder
import RecentlyViewed from "./RecentlyViewed"; // RecentlyViewed is in the same folder

const Categories = ({ addToFavorites }) => {
  const [books, setBooks] = useState([]);
  const [viewedBook, setViewedBook] = useState(null);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [searchTerm, setSearchTerm] = useState("fiction");

  const API_KEY = "AIzaSyDwrRX4bm4taVml4jbsvHGrZQEy3El2olE";

  // Fetch books from Google Books API
  const fetchBooks = async (query) => {
    try {
      setLoading(true); // Set loading to true before fetching
      let allBooks = [];
      let startIndex = 0;
      const maxResults = 40;
      let hasMoreBooks = true;

      while (hasMoreBooks) {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${query}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`
        );

        const fetchedBooks = response.data.items?.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          category: item.volumeInfo.categories?.[0] || query,
          description:
            item.volumeInfo.description || "No description available.",
          image:
            item.volumeInfo.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150",
        }));

        if (fetchedBooks?.length) {
          allBooks = [...allBooks, ...fetchedBooks];
          startIndex += maxResults;
        } else {
          hasMoreBooks = false;
        }
      }

      setBooks(allBooks);
      setError(null);
    } catch (error) {
      console.error("Error fetching books from Google Books API:", error);
      setError("Failed to load books. Please try again.");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchBooks(searchTerm);
  }, [searchTerm]);

  // Handle search
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.search.value.trim();
    if (query) {
      setSearchTerm(query);
    }
  };

  // Toggle viewed book
  const toggleViewBook = (book) => {
    if (viewedBook && viewedBook.id === book.id) {
      setViewedBook(null);
    } else {
      setViewedBook(book);

      // Add to recently viewed if not already present
      if (!recentlyViewed.some((viewed) => viewed.id === book.id)) {
        setRecentlyViewed((prev) => [book, ...prev]);
      }
    }
  };

  // Close a book from recently viewed
  const closeRecentlyViewedBook = (bookId) => {
    setRecentlyViewed((prev) => prev.filter((book) => book.id !== bookId));
  };

  // Close the current viewed book
  const closeViewedBook = () => {
    setViewedBook(null);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-3xl mb-6 flex items-center"
      >
        <input
          type="text"
          name="search"
          placeholder="Search for books (e.g., fiction, children, Christian)..."
          className="flex-grow p-2 border rounded-l-md text-sm md:text-base"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white text-sm md:text-base rounded-r-md"
        >
          Search
        </button>
      </form>

      {/* Loading Message */}
      {loading && <div className="text-blue-500 mb-6">Loading books...</div>}

      {/* Books List */}
      <div className="flex w-full">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${
            viewedBook ? "flex-grow md:w-2/3" : "w-full"
          }`}
        >
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onFavorite={() => addToFavorites(book)}
              onView={() => toggleViewBook(book)}
              isViewing={viewedBook?.id === book.id}
              viewText={viewedBook?.id === book.id ? "Close" : "View"}
            />
          ))}
        </div>

        {/* Viewed Book on the right */}
        {viewedBook && (
          <div className="w-full md:w-1/3 p-4 bg-white shadow-md h-screen overflow-y-auto fixed right-0">
            <button
              onClick={closeViewedBook}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2"
              title="Close"
            >
              ✕
            </button>
            <h1 className="text-2xl font-bold mb-4">{viewedBook.title}</h1>
            <img
              src={viewedBook.image}
              alt={viewedBook.title}
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-gray-600 mb-4">
              Category: {viewedBook.category}
            </p>
            <p className="text-gray-700 mb-4">{viewedBook.description}</p>
          </div>
        )}
      </div>

      {/* Recently Viewed */}
      <div className="mt-8 w-full">
        <RecentlyViewed
          recentlyViewed={recentlyViewed}
          onClose={closeRecentlyViewedBook}
          hideMessage={true} // Suppress the message
        />
      </div>
    </div>
  );
};

export default Categories;
