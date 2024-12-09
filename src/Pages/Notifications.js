import React from "react";
import { FaCheck } from "react-icons/fa";

const Notifications = ({ notifications, markAsRead, markAllAsRead }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      {notifications.length === 0 ? (
        <div className="text-gray-500">No notifications available.</div>
      ) : (
        <div>
          {/* Mark All as Read Button */}
          <div className="mb-4">
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <FaCheck />
              Mark All as Read
            </button>
          </div>

          {/* List of Notifications */}
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-4 bg-white shadow-md rounded ${
                  notification.read ? "opacity-70" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold">{notification.title}</h2>
                    <p className="text-gray-600">{notification.category}</p>
                  </div>
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
