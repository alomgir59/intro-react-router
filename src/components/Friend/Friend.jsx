import React from "react";
import "./friend.css";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  // console.log(friend);
  const { name, id, phone, email } = friend;
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="friend">
      <h2>{name}</h2>
      <p>Email:{email}</p>
      <p>Phone:{phone}</p>

      <p>
        <Link to={`/friend/${id}`}>Show me details</Link>
        <Link to={`/friend/${id}`}>
          <button className="btn">Show me details</button>
          <button className="handleBtn" onClick={handleNavigation}>
            {" "}
            Button Handler
          </button>
        </Link>
      </p>
    </div>
  );
};

export default Friend;
