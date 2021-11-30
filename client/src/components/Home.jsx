import React from "react";
import Login from "./Login";
import "../../src/style.css";

function Home() {
  return (

    <div className="home">
      <div className="row" >
        <div className="col-lg-6 container-fluid">
          <Login />
        </div>
        <div className="col-lg-6 container-fluid bitbazaar-intro" >
          <h1 >
            Welcome To <span> BIT Bazaar </span>. Your All in One Platform to Buy , Sell And Trade At College.
          </h1>
        </div>
      </div>
    </div>

  );
}

export default Home;
