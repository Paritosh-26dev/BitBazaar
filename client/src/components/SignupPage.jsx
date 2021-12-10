import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
import axios from "axios";

const baseURL = "http://localhost:5000/createNewUser";

function SignupPage() {
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  function handleChange(event) {
    // console.log(event.target)
    const { name, value } = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
    console.log(input)
  }
  function handleClick(event) {
    // event.preventDefault();
    const newUser = {
      username: input.username,
      password: input.password
    }

    axios.post(baseURL, newUser)
    .then(res =>{
      console.log(res.data);
    })
  }
  return (
    <div className="home">
      <div className="row">
        <div className="col-lg-6 container-fluid">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="brand_logo_container">
                <img src="" className="brand_logo" alt="Logo" />
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">

              <form >
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>

                  <input 
                  onChange={handleChange}
                  type="text" 
                  name="username" 
                  id="exampleInputusername1"
                  aria-describedby="usernameHelp"
                  className="form-control input_user" placeholder="username"
                   />

                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>

                  <input 
                  onChange={handleChange}
                  type="password" 
                  name="password" 
                  id="exampleInputpass1"
                  aria-describedby="passwordHelp"
                  className="form-control input_pass" placeholder="password" 
                  />
                  
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button onClick={handleClick} type="submit" name="button" className="btn login_btn">Signup</button>
                </div>
              </form>

            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Already have an account? <a href="http://localhost:3000/" className="ml-2">Login</a>
              </div>
            </div>
          </div>
          );


        </div>
        <div className="col-lg-6 container-fluid bitbazaar-intro">
          <h1>BIT Bazaar</h1>
          <p>Your All in One Platform to Buy , Sell And Trade At College.</p>

        </div>
      </div>
    </div>
  );
}
export default SignupPage;
