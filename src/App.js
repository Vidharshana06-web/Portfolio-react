import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // adjust if you saved it somewhere el'
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pro" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/achieve" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
     <Footer />
    </div>
  );
}

export default App;
