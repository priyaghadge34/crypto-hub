require("dotenv").config();
const express = require("express");
const cors = require("cors");

// DB connection (you already have this)
const connectDB = require("./config/db"); // adjust if different

// Routes
const authRoutes = require("./routes/auth.routes");

// Error middleware
const { errorHandler } = require("./middleware/error.middleware");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("CryptoHub API running...");
});

// Error handler (MUST be last)
app.use(errorHandler);

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});