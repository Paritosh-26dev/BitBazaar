import { useState } from 'react';
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";

function Forgot() {
    const [email, setEmail] = useState('');

    const handleReset = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          (input) => (input.value = "")
        );
        setEmail({ email: "" });
      };

      const forgotPassword = async (e) => {
        e.preventDefault();
        // check fields
        if (!email)
            alert("Email field cannot be empty");
        
        try {
          await axios.post("http://localhost:5000/api/forgot_pass", { email });
          handleReset();
          alert("Please check your email 📧");
          window.location.href = '/Marketplace'
        } catch (err) {
          alert(err.response.data.msg);
        }
      };
    
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
                            <form onSubmit={forgotPassword}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="exampleInputusername2"
                                        aria-describedby="usernameHelp"
                                        className="form-control input_user" placeholder="E-mail"
                                    />
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button type="submit" name="button" className="btn login_btn"> Send </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 container-fluid bitbazaar-intro">
                    <h1>BIT Bazaar</h1>
                    <p>Your All in One Platform to Buy , Sell And Trade At College.</p>

                </div>
            </div>
        </div>
    );
}
export default Forgot;
