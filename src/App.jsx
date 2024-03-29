import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Account from "./pages/account/Account";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";

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
          <Route
            path="/login"
            element={<Login />} 
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } 
          />
          <Route
            path="/movies/:id"
            element={<Movie />}
          />
          <Route
            path="*" 
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;