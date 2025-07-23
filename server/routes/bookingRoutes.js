const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err.message);
  } else {
    console.log('MySQL connected');
  }
});

router.post('/', (req, res) => {
  const { name, email, roomType, checkIn, checkOut, message } = req.body;
  const query = `INSERT INTO bookings (name, email, roomType, checkIn, checkOut, message)
                 VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(query, [name, email, roomType, checkIn, checkOut, message], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Booking saved', id: results.insertId });
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM bookings', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;