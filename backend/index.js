const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());
// Test API
app.get("/", (req, res) => {
    res.json({ message: "API is working!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
