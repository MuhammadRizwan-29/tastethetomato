import { useState } from "react";
import "./style.css";
import { assets } from "../../assets/assets";

export default function LoginPopup({ setShowLogin }) {
  const [curState, setCurState] = useState("Sign Up");
  return (
    <section className="login_popup" id="login">
      <div className="lp_wrapper">
        <form action="" className="login_form-container">
          <div className="title">
            <h2>{curState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="Close"
            />
          </div>
          <div className="lp_inputs">
            {curState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your name" required />
            )}
            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button>{curState === "Sign Up" ? "Create account" : "Login"}</button>
          <div className="lp_condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
          {curState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurState("Login")}>Login here</span>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
