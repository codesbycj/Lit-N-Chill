import React, { useState } from "react";
import { login, signUp, logOut } from "../../../firebase";
import spinner from '../../netflix_spinner.gif'
import "./Login.css";
import Logo from "../../logo.png";

export const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }

    setLoading(false)
  };

  return (
    loading ? <div className="loginSpinner"><img src={spinner} alt="" /></div> :
    <div className="login">
      <img src={Logo} alt="" className="loginLogo" />
      <div className="loginForm">
        <h1>{signState}</h1>

        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name=""
            id=""
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <button onClick={userAuth} type="submit">
            {signState}
          </button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>

            <p>Need Help?</p>
          </div>
        </form>

        <div className="formSwitch">
          {signState === "Sign In" ? (
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
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};
