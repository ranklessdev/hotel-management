const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes"); // ✅ Correct import

dotenv.config();

const app = express();

//  Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", (req, res, next) => {
  console.log("Booking route hit"); // ✅ Optional debug log
  next();
}, bookingRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});