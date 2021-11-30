import React from "react";
import { Link } from "react-router-dom";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";

function Navbar() {
    return (

        <div className="container-fluid">
            {/* <!-- Nav Bar --> */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand" to="/">BitBazaar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Marketplace">Marketplace</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Wishlist">Wishlist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sell">Sell</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
                </div>
            </nav>
        </div>


    );
}

export default Navbar;