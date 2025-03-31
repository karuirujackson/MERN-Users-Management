const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests

// Sample Users Data
const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, name: "Bob Smith", email: "bob@example.com" },
  { id: 5, name: "Alice Johnson", email: "alice@example.com" },
  { id: 6, name: "Bob Smith", email: "bob@example.com" },
  { id: 7, name: "Alice Johnson", email: "alice@example.com" },
  { id: 8, name: "Bob Smith", email: "bob@example.com" },
  { id: 9, name: "Alice Johnson", email: "alice@example.com" },
  { id: 10, name: "Bob Smith", email: "bob@example.com" },
];

// API Route
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
