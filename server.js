const jsonServer = require("json-server");
const cors = require("cors"); // Import cors package

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS with custom options
server.use(
  cors({
    origin: "*", // Allow all origins (change to specific domain for production, e.g., "https://shelfquest.onrender.com")
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Apply default middlewares (logger, static, etc.)
server.use(middlewares);

// Custom route example (optional)
// Add additional logic or middleware for specific routes if needed

// Use the JSON Server router
server.use(router);

// Use environment-based port or default to 3001
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
