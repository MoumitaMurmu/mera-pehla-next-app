"use client";

import { useContext } from "react";
import "./style.css";
import { ModalContext } from "@/context/ModalContext";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";




const Login = () => {
  const { openModal } = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="container">
      <h1>Login To Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-sections">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="forgot-password">
        <p>
          Forgot Password ?{" "}
          <button type="button" onClick={() => openModal(<ForgotPassword />)}>
            Reset Password
          </button>
        </p>
      </div>

      <div className="signup-section">
        <p>
          New User? Click here to{" "}
          <button type="button" onClick={() => openModal(<SignUp />)}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
