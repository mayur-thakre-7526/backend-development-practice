import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://ik.imagekit.io/qme98t1sj/image_CUJN_8t-a.jpg",
      caption: "Caption for image 1",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <section className="feed-container">
      <h1>Feed Page</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
