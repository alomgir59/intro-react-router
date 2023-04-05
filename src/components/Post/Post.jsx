import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { id, title, body } = post;
  console.log(post);
  return (
    <div className="post">
      <h4>ID:{id}</h4>
      <p>Title: {title}</p>

      <Link to={`/post/${id}`}>Show Details</Link>
      <button className="btn">Show Post Details</button>
    </div>
  );
};

export default Post;
