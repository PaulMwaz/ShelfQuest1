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
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Add to favorites
  const addToFavorites = (book) => {
    if (!favorites.some((fav) => fav.id === book.id)) {
      setFavorites([...favorites, book]);
    }
  };

  // Remove from favorites
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((book) => book.id !== id));
  };

  // Add to recently viewed
  const addToRecentlyViewed = (book) => {
    if (!recentlyViewed.some((viewed) => viewed.id === book.id)) {
      setRecentlyViewed((prev) => [book, ...prev]);
    }
  };

  // Remove from recently viewed
  const removeFromRecentlyViewed = (id) => {
    setRecentlyViewed(recentlyViewed.filter((book) => book.id !== id));
  };

  // Add notification
  const addNotification = (book) => {
    if (!notifications.some((notification) => notification.id === book.id)) {
      setNotifications((prev) => [
        ...prev,
        { ...book, read: false }, // Add a read property
      ]);
    }
  };

  // Mark a single notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow ml-16 md:ml-60 transition-all duration-300 p-4 bg-gray-100">
        <Routes>
          <Route
            path="/categories"
            element={
              <Categories
                addToFavorites={addToFavorites}
                addToRecentlyViewed={addToRecentlyViewed}
                recentlyViewed={recentlyViewed}
                addNotification={addNotification}
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
            element={
              <RecentlyViewed
                recentlyViewed={recentlyViewed}
                removeFromRecentlyViewed={removeFromRecentlyViewed}
              />
            }
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
