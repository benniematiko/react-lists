import React from "react";
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "loem ipsum ..", author: "mario", id: 1 },
    {
      title: "Praising Jesus everytime",
      body: "loem ipsum ..",
      author: "ben",
      id: 2,
    },
    {
      title: "Join celebratiions",
      body: "loem ipsum ..",
      author: "kathy",
      id: 3,
    },
  ]);
  return (
    <div className="Home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>Blog title: {blog.title}</h2>

          <p>{blog.body}</p>

          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
