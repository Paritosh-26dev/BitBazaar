import React from "react";
import Login from "./Login";
import "../../src/style.css";

function Home() {
  return (
    <div className="home">
      <div className="row">
        <div className="col-lg-6 container-fluid">
          <Login />
        </div>
        <div className="col-lg-6 container-fluid bitbazaar-intro">
          <h1>BIT Bazaar</h1>
          <p>Buy, Sell And Trade At College!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
