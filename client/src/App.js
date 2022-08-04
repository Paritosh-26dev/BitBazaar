import React from "react";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import Signup from "./components/Login/SignupPage";
import Navbar from "./components/Navbar/Navbar";
import WishList from "./components/Wishlist/WishList";
import BuyPage from "./components/Buy/BuyPage";
import SellPage from "./components/Sell/SellPage";
import ContactUs from "./components/Contact/ContactUs";
import ErorPage from "./components/Home/ErrorPage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProfilePage from "./components/Profile/ProfilePage";
import Forgot from "./components/Forgot/Forgot";
import Reset from "./components/Forgot/Reset";

function App() {
  return (
    <div>
      <Router>
      <div className="nav-bg">
        <Navbar />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/auth/reset-password/:token" element={<Reset />} />
          <Route path="/Marketplace" element={<BuyPage />} />
          <Route path="/Wishlist" element={<WishList />} />
          <Route path="/Sell" element={<SellPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="*" element={<ErorPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
