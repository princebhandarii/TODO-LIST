import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todolist from "./Todolist.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Todolist" element={<Todolist />} />
    </Routes>
  </BrowserRouter>
);
