const express = require("express");
const { createBooking, getBookings } = require("../controllers/bookingController");

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings); // ✅ This is the missing GET route

module.exports = router;