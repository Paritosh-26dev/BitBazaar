import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <div className="nav-bg"><Navbar /> </div>
            {/* <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contact">
                    <Footer />
                </Route>
            </Switch>   
            </Router> */}

            <Home />
            <Footer />
        </div>
    );
}

export default App;