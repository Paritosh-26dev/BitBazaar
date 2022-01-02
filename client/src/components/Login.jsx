import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
import { logInUser } from "../actions/UserActions" ;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({ password: "", showPassword: false });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
 
    const data = await response.json();

    if (data.user) {
      localStorage.setItem('token', data.user);
      alert('Login successful');
      logInUser(data.userid);

      //sidpatch(loginaction , userid as a parameter)
      window.location.href = '/Marketplace'
    } else {
      alert('Please check your username and password');
    }
  }
  return (
    <div className="user_card">
      <div className="d-flex justify-content-center">
        <div className="brand_logo_container">
          <img src="" className="brand_logo" alt="Logo" />
        </div>
      </div>
      <div className="d-flex justify-content-center form_container">
        <form onSubmit={loginUser}>
          <div className="input-group mb-3">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="example1"
              aria-describedby="usernameHelp"
              type="email"
              name="email"
              className="form-control input_user"
              placeholder="E-mail" />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              id="example2"
              aria-describedby="usernameHelp"
              name="password"
              className="form-control input_pass"
              placeholder="Password"
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword} >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" className="btn login_btn">Login</button>
          </div>
        </form>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-center links">
          Don't have an account? <a href="http://localhost:3000/signup" className="ml-2">Sign Up</a>
        </div>
        <div className="d-flex justify-content-center links">
          <a href="/Forgot">Forgot your password?</a>
        </div>
      </div>
    </div>

  );
}
export default Login ;
