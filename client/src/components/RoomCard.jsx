import React from "react";
import "./RoomCard.css";

const RoomCard=({room})=>{
    return(
        <div className="room-card">
            <img src={room.image} alt={room.name}/>
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <p className="price">{room.price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default RoomCard;