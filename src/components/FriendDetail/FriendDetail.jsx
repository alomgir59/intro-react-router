import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  // console.log(friend);
  const navigates = useNavigate();
  const handleGoBack = () => {
    navigates(-1);
  };
  return (
    <div>
      <h1>Everything about this person in here!!</h1>
      <p>Name:{friend.name}</p>
      <p>Email:{friend.email}</p>
      <p>Phone:{friend.phone}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default FriendDetail;
