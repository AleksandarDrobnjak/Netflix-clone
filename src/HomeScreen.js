import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Bannar from "./Banner";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Bannar />
    </div>
  );
}

export default HomeScreen;
