import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Favorites from "./Pages/Favorites";
import Recommendations from "./Pages/Recommendations";
import RecentlyViewed from "./Pages/RecentlyViewed";
import Notifications from "./Pages/Notifications";
import About from "./Pages/About";

const App = () => {
  // State for favorites, recently viewed books, notifications, and the currently viewed book
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [viewedBook, setViewedBook] = useState(null);

  // Add a book to favorites
  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  // Remove a book from favorites
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((book) => book.id !== id));
  };

  // View or unview a book
  const viewBook = (book) => {
    setViewedBook(viewedBook?.id === book.id ? null : book);
    if (!recentlyViewed.some((item) => item.id === book.id)) {
      setRecentlyViewed([book, ...recentlyViewed]);
    }
    if (!notifications.some((notification) => notification.id === book.id)) {
      setNotifications([...notifications, { ...book, read: false }]);
    }
  };

  // Mark notifications as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow ml-16 md:ml-60 transition-all duration-300 p-4 bg-gray-100">
        <Routes>
          <Route
            path="/categories"
            element={
              <Categories
                addToFavorites={addToFavorites}
                viewBook={viewBook}
                viewedBook={viewedBook}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
              />
            }
          />
          <Route
            path="/recommendations"
            element={<Recommendations favorites={favorites} />}
          />
          <Route
            path="/recently-viewed"
            element={<RecentlyViewed recentlyViewed={recentlyViewed} />}
          />
          <Route
            path="/notifications"
            element={
              <Notifications
                notifications={notifications}
                markAsRead={markAsRead}
                markAllAsRead={markAllAsRead}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
