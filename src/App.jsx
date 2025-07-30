import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import "./App.css"
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
