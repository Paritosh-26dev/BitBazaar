import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import "../../src/style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div >
      <div class="bg-image"></div>
        <div class="bg-text">
          <Navbar />
          <div class="row" >
          <div class="col-sm-6">
            <Login />
          </div>
          <div class="col-sm-6 bitbazaar-intro" >
            <h1 >
              Welcome To <span> BIT Bazaar </span>. Your All in One Platform to Buy , Sell And Trade At College. 
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
