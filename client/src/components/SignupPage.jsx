import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";

// const baseURL = "http://localhost:5000/createNewUser";

function SignupPage() {
  const navigate = useNavigate();

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault();
		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', 
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json();

		if (data.status === 'ok') {
      alert("Succesfully signed up !")
			navigate('/Marketplace');
		}
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

              <form onSubmit={registerUser}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>

                  <input 
                  onChange={(e) => setName(e.target.value)}
                  type="text" 
                  name="username" 
                  id="exampleInputusername1"
                  aria-describedby="usernameHelp"
                  className="form-control input_user" placeholder="username"
                   />

                </div>
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
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>

                  <input 
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" 
                  name="password" 
                  id="exampleInputpass1"
                  aria-describedby="passwordHelp"
                  className="form-control input_pass" placeholder="password" 
                  />
                  
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button  type="submit" name="button" className="btn login_btn">Signup</button>
                </div>
              </form>

            </div>
            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Already have an account? <a href="http://localhost:3000/" className="ml-2">Login</a>
              </div>
            </div>
          </div>


        </div>
        <div className="col-lg-6 container-fluid bitbazaar-intro">
          <h1>BIT Bazaar</h1>
          <p>Buy, Sell And Trade At College!</p>

        </div>
      </div>
    </div>
  );
}
export default SignupPage;
