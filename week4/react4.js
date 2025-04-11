const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

// New GET route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
