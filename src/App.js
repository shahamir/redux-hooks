import React from "react";
import { Link, Outlet } from "react-router-dom";
import BookingForm from "./components/booking/BookingForm";
import BookingList from "./components/booking/BookingList";
import { Home } from "./components/home/Home";
import { Posts } from "./components/posts/FirstPosts";
import { SecondPosts } from "./components/posts/SecondPosts";
import { TodoForm } from "./components/todo/TodoForm";
import { TodoList } from "./components/todo/TodoList";

function App() {
  return (
    <div>
      <h1>Navigation</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <Link to="/booking">Booking</Link>
          <Link to="/todo">Todo</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
