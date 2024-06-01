import React, { useState } from 'react';
import './App.css';
import Post from './Components/Post' 

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data); // Add this line to check if data is being fetched correctly
        setPosts(data);
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div>
      <div className='btn'>
        <button onClick={fetchPosts}>Get Posts</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        {posts.map((e) => (
          <Post key={e.id} title={e.title} body={e.body} />
        ))}
      </div>
    </div>
  );
  
};

export default App;
