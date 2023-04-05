import React from "react";
import "./friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  // console.log(friend);
  const { name, id, phone, email } = friend;
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>

      <p>
        <Link to={`/friend/${id}`}>Show me details</Link>
      </p>
    </div>
  );
};

export default Friend;
