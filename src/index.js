import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { appReducers, initialState } from "./reducers";
import { AppStateProvider } from "./store/Store";
import { Booking } from "./components/booking/Booking";
import { Todo } from "./components/todo/Todo";
import { Posts } from "./components/posts/Posts";
import { Nav } from "./components/nav/Nav";
import { NetlifyFunctionTests } from "./components/netlifyFunctionTest/NetlifyFunctionTest";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider initialState={initialState} reducer={appReducers}>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/netlify" element={<NetlifyFunctionTests />} />
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
