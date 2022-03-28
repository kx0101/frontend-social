import "./login.css"
import { useRef } from "react";
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { CircularProgress } from '@mui/material';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );

  };

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Her<span className="mes">mes</span></h3>
                <span className="loginDesc">Connect with friends around the world with Hermes! Super quick!</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" className="loginInput" ref={email} required />
                    <input placeholder="Password" autoComplete="off" type="password" ref={password} className="loginInput" required minLength="6" />
                    <button className="loginButton" type="submit" disabled={isFetching}>
                        {isFetching ? <CircularProgress color="secondary" /> : "Log in"}
                    </button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">
                        {isFetching ? <CircularProgress color="secondary" /> : "Create an account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
