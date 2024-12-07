import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import necessary Router components

import './index.css';
import App from './App.jsx';
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>  
    <Routes>        
      {/* The parent route with the App component */}
      <Route path="/" element={<App />}>
        {/* Define the nested routes */}
        <Route index element={<Home />} />  {/* Home route */}
        <Route path="about" element={<About />} />  {/* About route */}
        <Route path="contact" element={<Contact />} />  {/* Contact route */}
      </Route>
    </Routes>
  </BrowserRouter>
);
