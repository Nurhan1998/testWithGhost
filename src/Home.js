import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Test home page</h1>
      <Link className="App-link" to="/blog">
        Go to blog
      </Link>
    </>
  );
};

export default Home;
