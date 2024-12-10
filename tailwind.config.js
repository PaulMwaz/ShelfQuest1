/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        glowing: "glowing 3s infinite",
      },
      keyframes: {
        glowing: {
          "0%": { boxShadow: "0 0 5px #ff0000, 0 0 10px #ff7300" },
          "50%": { boxShadow: "0 0 20px #fffb00, 0 0 30px #48ff00" },
          "100%": { boxShadow: "0 0 5px #ff0000, 0 0 10px #ff7300" },
        },
      },
    },
  },
  plugins: [],
};
