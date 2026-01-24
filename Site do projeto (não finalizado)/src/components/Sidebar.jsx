import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Link to="/">Home</Link>
    </div>
  );
};

export default Sidebar;
