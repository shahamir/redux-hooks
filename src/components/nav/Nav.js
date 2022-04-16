import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
};
