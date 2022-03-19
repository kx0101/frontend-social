import "./register.css"

export default function Register() {
    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Her<span className="mes">mes</span></h3>
                  <span className="loginDesc">Connect with friends around the world with Hermes! Super quick!</span>
              </div>
              <div className="loginRight">
                  <div className="loginBox">
                      <input placeholder="Username" type="text" className="loginInput" />
                      <input placeholder="Email" type="text" className="loginInput" />
                      <input placeholder="Password" type="text" className="loginInput" />
                      <input placeholder="Confirm Password" type="text" className="loginInput" />
                      <button className="loginButton">Sign Up</button>
                      <button className="loginRegisterButton">Log in</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
