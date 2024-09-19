import React from "react";
import Login from "./Pages/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./Pages/signup/Signup";
import Home from "./Pages/home/Home";
import { Toaster } from "react-hot-toast";
export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Toaster />
    </div>
  );
}
