const express = require('express');
const cors =require('cors');
const dotenv = require('dotenv');
dotenv.config();

const bookingRoutes=require('./routes/bookingRoutes');
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api/bookings', bookingRoutes);
app.listen(process.env.PORT, () => {
  console.log(` Server running on port ${process.env.PORT}`);
});
