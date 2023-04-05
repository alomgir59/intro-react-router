import React from "react";

const Post = ({ post }) => {
  const { id, title, body } = post;
  console.log(post);
  return (
    <div>
      <h4>ID:{id}</h4>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default Post;
