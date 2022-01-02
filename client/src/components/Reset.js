import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";

const initialState = {
  password: "",
  cf_password: "",
};

function Reset() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(initialState);
  const { password, cf_password } = data;
  const { token } = useParams();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setData({ ...data, password: "", cf_password: "" });
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    // check fields
    if (!password || !cf_password)
      alert("Please fill in all fields.");

    // password match
    if (password !== cf_password)
      alert("Password did not match");

    try {
      await axios.post(
        "http://localhost:5000/api/reset_pass",
        { password },
        {
          headers: { Authorization:token },
        }
      );
      handleReset();
      alert("Password was successfully changed 🤗");
      window.location.href = '/'
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="user_card">
      <div className="d-flex justify-content-center">
        <div className="brand_logo_container">
          <img src="" className="brand_logo" alt="Logo" />
        </div>
      </div>
      <div className="d-flex justify-content-center form_container">
        <form onSubmit={resetPassword}>
        <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <Input
              onChange={handleChange}
              id="example1"
              aria-describedby="usernameHelp"
              name="password"
              className="form-control input_pass"
              placeholder="New Password"
              type={visible ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClick} >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="input-group mb-2">
            <div className="input-group-append">
              <span className="input-group-text"><i className="fas fa-key"></i></span>
            </div>
            <Input
              onChange={handleChange}
              id="example2"
              aria-describedby="usernameHelp"
              name="cf_password"
              className="form-control input_pass"
              placeholder="Confirm password"
              type={visible ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClick} >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <div className="d-flex justify-content-center mt-3 login_container">
            <button type="submit" name="button" className="btn login_btn"> Reset </button>
          </div>
        </form>
      </div>
    </div>

  );
}
export default Reset;
