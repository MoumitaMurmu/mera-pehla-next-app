"use client";

import { ModalContext } from "@/context/ModalContext";
import "./style.css";
import Login from "./Login";
import { useContext } from "react";

const SignUp = () => {
  const { openModal } = useContext(ModalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br/>
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
          <br/>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter new password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <br/>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className="login-section">
        <p>
          Already have an account?{" "}
          <span onClick={() => openModal(<Login />)}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
