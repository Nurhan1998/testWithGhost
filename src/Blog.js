import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState({ post: [] });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "http://richmasster.ru/ghost/api/v3/content/posts/?key=fc0c8e3b6bfcc7b74f5b1e7585"
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Test Blog page</h1>
      <ul>
        {data.posts?.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.custom_excerpt}</p>
            <img
              style={{ width: "fullWidth", height: "300px" }}
              src={post.feature_image}
            />
          </div>
        ))}
      </ul>
      <Link className="App-link" to="/">
        Go to home
      </Link>
    </div>
  );
};

export default Blog;
