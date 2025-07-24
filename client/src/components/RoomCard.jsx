import React from "react";
import "./RoomCard.css";
import { Link } from "react-router-dom";
const RoomCard=({room})=>{
    return(
        <div className="room-card">
            <img src={room.image} alt={room.name}/>
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p className="price">{room.price}</p>
          <Link to="/booking">Book Now</Link>
        </div>
    );
};

export default RoomCard;