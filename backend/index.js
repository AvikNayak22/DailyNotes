require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDb = require("./config/connectDb");

// Import routes
const userRoutes = require("./routes/user.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();

// Connect to MongoDB
connectDb();

//Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Routes
app.use("/user", userRoutes);
app.use("/note", noteRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
