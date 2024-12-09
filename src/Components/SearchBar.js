import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchCategory, setSearchCategory] = useState("All");

  const categories = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Children",
    "Academic",
    "Religion",
    "Technology",
    "Hobbies",
    "Languages",
    "Comics",
  ];

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder={`Search books by ${searchCategory}`}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        onChange={handleInputChange}
      />
      <select
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
