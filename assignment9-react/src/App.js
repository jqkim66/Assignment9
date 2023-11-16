import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Jobs from "./components/pages/Jobs";
import Contact from "./components/pages/Contact";
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


import './App.css'; 

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Router>

      <Navbar bg="dark" data-bs-theme="dark">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </Navbar>
      <Routes>
        <Route path="/login" element={<Login onLoginSuccess={() => setLoggedIn(true)} />} />
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/about-us" element={isLoggedIn ? <AboutUs /> : <Navigate to="/login" replace />} />
        <Route path="/jobs" element={isLoggedIn ? <Jobs /> : <Navigate to="/login" replace />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

