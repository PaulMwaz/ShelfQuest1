# ShelfQuest 📚

Welcome to ShelfQuest Library! 🌟

ShelfQuest is a modern and intuitive book library application designed to simplify the process of finding, managing, and exploring books. It allows users to browse books, categorize favorites, view recently accessed titles, and receive personalized recommendations.

---

## Demo

This is an example of how the app should work:  
![ShelfQuest Demo](./public/assets/demo.gif)

To preview the GIF, right-click on `README.md` and select **Open Preview**.

---

## Features 🚀

- **Explore Categories:** Browse books across a wide range of genres.
- **Favorites:** Save your favorite books for easy access.
- **Recommendations:** Get book recommendations based on your favorite selections.
- **Recently Viewed:** Keep track of the books you've recently accessed.
- **Notifications:** Stay updated with notifications for viewed books and other events.
- **Sidebar Navigation:** Seamlessly switch between different sections of the app.
- **Responsive Design:** Fully responsive layout for mobile, tablet, and desktop.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Contributing](#contributing)

---

## Technologies Used 💻

- **Frontend:** React, React Router, Tailwind CSS
- **Backend:** JSON Server (for simulating API data)
- **Icons:** React Icons

---

## Prerequisites 🧩

- Node.js and npm installed. Download Node.js from [here](https://nodejs.org/).

---

## Installation 🛠

##### 1. Clone the repository:

```
git clone https://github.com/your-username/shelfquest.git
cd shelfquest
```

##### 2. Install a stable React 18 version:

```
npm install react@18 react-dom@18
```

##### 3.Install React Router DOM:

```
npm install react-router-dom
```

##### 4. Install React Icons:

```
npm install react-icons
```

##### 5. Install Axios:

```
npm install axios
```

##### 6. Install and Run JSON Server:

```
json-server --watch db.json --port 5000
```

##### 7. Start the React Development Server:

```
npm start
```

##### 8. Access the App:

###### Open http://localhost:3000 in your browser.

---

## Usage 🧑‍💻

1.Navigate to Categories to explore available books.
2.Click the Favorite button to add books to your favorites list.
3.View Recently Viewed for quick access to previously opened books.
4.Check Recommendations for suggestions based on your favorites.
5.Manage notifications in the Notifications section.

---

## Components Overview 🧩

Core Components

1.Navbar: Displays the app title and a header for navigation.
2.Sidebar: Provides quick links to all app sections.
3.BookCard: Displays individual book details with options to favorite or view.
4.SearchBar: Allows users to search for books by title or category.

---

## Pages

1.Categories: Displays all books fetched from the API.
2.Favorites: Lists favorited books with an option to remove them.
3.Recommendations: Suggests new books based on your favorites.
4.Recently Viewed: Shows books you've recently opened.
5.Notifications: Displays recent activity notifications.
6.About: Provides information about the application.

---

## API Endpoints 🌐

GET /books: Fetch all books.
POST /books: Add a new book (admin use).
DELETE /books/:id: Remove a book (admin use).
PATCH /books/:id: Update a book's details (admin use).

---

## Folder Structure 📂

ShelfQuest
│
├── public/ # Public assets: favicon, index.html, etc.
├── src/
│ ├── Components/ # Reusable components (Sidebar, Navbar, BookCard, etc.)
│ ├── Pages/ # Main pages (Categories, Favorites, Recommendations, etc.)
│ ├── App.js # Main app component with route configurations
│ ├── index.js # Entry point for the React app
│ ├── styles.css # Additional custom styles
├── db.json # Mock API data for JSON Server
├── package.json # Project configuration and dependencies
└── README.md # Project documentation

---

## Future Enhancements ✨

1.Add user authentication and profiles.
2.Implement pagination and infinite scrolling.
3.Enhance the recommendation algorithm.
4.Include user reviews and ratings for books.

---

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Contributing 🤝

We welcome contributions! To contribute:

1.Report bugs and issues: Open an issue on GitHub.
2.Suggest new features: Discuss ideas via issues or pull requests.
3.Code contributions: Submit pull requests with clear descriptions and pass any existing tests.

##### Enjoy using ShelfQuest! 📖✨

###### @Group 5-ShelfQuest 📚
