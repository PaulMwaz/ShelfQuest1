const jsonServer = require("json-server");
const cors = require("cors"); // Import cors package

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(cors()); // used to enable CORS
server.use(middlewares);

// Custom route example (optional)
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
