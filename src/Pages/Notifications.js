import React from "react";
import { FaCheck } from "react-icons/fa";

const Notifications = ({ notifications, markAsRead, markAllAsRead }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>

      {notifications.length === 0 ? (
        <div className="text-gray-500 text-center">
          No notifications available.
        </div>
      ) : (
        <div>
          {/* Mark All as Read Button */}
          <div className="mb-6 text-right">
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <FaCheck />
              Mark All as Read
            </button>
          </div>

          {/* List of Notifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 bg-white shadow-md rounded ${
                  notification.read ? "opacity-70" : ""
                }`}
              >
                <img
                  src={notification.image || "https://via.placeholder.com/150"}
                  alt={notification.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-lg font-bold truncate">
                  {notification.title}
                </h2>
                <p className="text-gray-600 truncate">
                  {notification.category}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className={`flex items-center gap-2 px-4 py-2 ${
                      notification.read ? "bg-gray-400" : "bg-green-600"
                    } text-white rounded hover:bg-green-700`}
                    disabled={notification.read}
                  >
                    <FaCheck />
                    {notification.read ? "Read" : "Mark as Read"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;
