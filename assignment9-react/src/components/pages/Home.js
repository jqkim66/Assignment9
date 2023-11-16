import React from "react";
import BootstrapCard from "../Card/Card";

function Home() {
  return (
    <div className="container mt-3">
      <h1>Home</h1>
      <BootstrapCard title="Welcome to Home Page" content="You are successfully logged in" />
    </div>
  );
}

export default Home;