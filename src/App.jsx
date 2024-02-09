import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<SignUp />} 
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;