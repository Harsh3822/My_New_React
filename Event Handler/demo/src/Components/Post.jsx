// Components/Post.js
import React from 'react';

const Post = ({ title, body }) => {
  return (
    <div className="post" style={{border:"2px solid teal", margin:"10px"}}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
