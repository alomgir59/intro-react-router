import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h1>Everything about this person in here!!</h1>
      <p>Name:{friend.name}</p>
      <p>Email:{friend.email}</p>
      <p>Phone:{friend.phone}</p>
    </div>
  );
};

export default FriendDetail;
