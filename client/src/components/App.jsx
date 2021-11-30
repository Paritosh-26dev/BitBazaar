import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import ErorPage from "./ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <div className="nav-bg">
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<ErorPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
