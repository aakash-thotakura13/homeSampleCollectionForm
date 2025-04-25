// We'll break down this into multiple steps:

// Step 1 - Create the backend server (Node + Express)
// Step 2 - Connect to MongoDB Database
// Step 3 - Puppeteer
// Step 4 - Nodemailer
// Step 5 - WhatsApp Web API

// For now, only do the Step 1

const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/pdfs", express.static("pdfs"));

dotenv.config();
connectDB();

const formRoutes = require("./routes/formRoutes");

app.use("/api/form", formRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
