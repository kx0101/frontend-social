import { useRef } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();

        // check if password matches or not
        if(confirmPassword.current.value !== password.current.value){
            confirmPassword.current.setCustomValidity("Passwords do not match, refresh your page and try again.")
        } else {
            // Creating user
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user)
                navigate("/login")

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Her<span className="mes">mes</span></h3>
                  <span className="loginDesc">Connect with friends around the world with Hermes! Super quick!</span>
              </div>
              <div className="loginRight">
                  <form className="loginBox" onSubmit={handleClick}>
                      <input placeholder="Username" type="text" ref={username} className="loginInput" required />
                      <input placeholder="Email" type="email" ref={email} className="loginInput" required />
                      <input placeholder="Password" type="password" ref={password} className="loginInput" minLength="6" required />
                      <input placeholder="Confirm Password" type="password" ref={confirmPassword} className="loginInput" minLength="6" required />
                      <button className="loginButton" type="submit">Sign Up</button>
                      <button className="loginRegisterButton">Log in</button>
                  </form>
              </div>
          </div>
      </div>
    )
  }
