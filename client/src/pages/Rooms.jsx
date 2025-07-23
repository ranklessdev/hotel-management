import React, { Suspense } from "react";
import "./Rooms.css";

const RoomCard = React.lazy(() => import("../components/RoomCard"));

const roomsData = [
  {
    id: 1,
    name: "Deluxe King Room",
    description: "Spacious room with a king-size bed, city view, and modern amenities.",
    price: "₹4,999/night",
    image: "/room1.webp"
  },
  {
    id: 2,
    name: "Executive Suite",
    description: "Elegant suite with separate living area, balcony, and premium bath essentials.",
    price: "₹7,499/night",
    image: "/room2.webp"
  },
  {
    id: 3,
    name: "Standard Twin Room",
    description: "Comfortable twin bed setup perfect for family or friends.",
    price: "₹3,499/night",
    image: "/room3.webp"
  },
  {
    id: 4,
    name: "Modern Budget Room",
    description: "A cozy option for travelers on a budget without sacrificing comfort.",
    price: "₹2,499/night",
    image: "/room4.webp"
  },
  {
    id: 5,
    name: "Garden View Room",
    description: "Relax with peaceful garden views and plush interiors.",
    price: "₹3,999/night",
    image: "/room5.webp"
  },
  {
    id: 6,
    name: "Luxury Suite",
    description: "Top-floor luxury with private jacuzzi and panoramic city views.",
    price: "₹9,999/night",
    image: "/room6.webp"
  },
  {
    id: 7,
    name: "Classic Queen Room",
    description: "Ideal for couples, featuring soft lighting and premium bedding.",
    price: "₹4,499/night",
    image: "/room7.webp"
  },
  {
    id: 8,
    name: "Family Suite",
    description: "Spacious two-bedroom suite perfect for families traveling together.",
    price: "₹6,999/night",
    image: "/room8.webp"
  },
  {
    id: 9,
    name: "Studio Single",
    description: "Minimalist design with comfort and privacy for solo travelers.",
    price: "₹2,999/night",
    image: "/room9.webp"
  }
];

const Rooms = () => {
  return (
    <section className="room-container">
      <h1>Our Rooms</h1>
      <Suspense fallback={<div>Loading rooms...</div>}>
        <div className="rooms-grid">
          {roomsData.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default Rooms;