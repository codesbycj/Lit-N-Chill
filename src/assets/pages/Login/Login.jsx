import React, { useState } from "react";
import "./Login.css";
import Logo from "../../logo.png";

export const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="login">
      <img src={Logo} alt="" className="loginLogo" />
      <div className="loginForm">
        <h1>{signState}</h1>

        <form>
          {signState === "Sign Up" ? (
            <input type="text" name="" id="" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" name="" id="" placeholder="Email Address" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>

        <div className="formSwitch">
          {signState === "Sign In" ? 
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                {" "}
                Sign Up Now
              </span>
            </p>
           : 
            <p>
              Already have an account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          }
        </div>
      </div>
    </div>
  );
};
