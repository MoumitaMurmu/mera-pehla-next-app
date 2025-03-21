"use client";

import { useContext } from "react";
import styles from "./form.module.css";
import { ModalContext } from "@/context/ModalContext";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import { useRouter } from "next/navigation";

const Login = () => {
  const { openModal, closeModal } = useContext(ModalContext);

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
    closeModal();
  };
  return (
    <div className={styles.container}>
      <h2>Login To Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className={styles.forgotPassword}>
          <p>
            Forgot Password?{" "}
            <span onClick={() => openModal(<ForgotPassword />)}>
              Reset Password
            </span>
          </p>
        </div>
        <div className={styles.formActions}>
          <button type="submit">Login</button>
        </div>
      </form>

      <div className={styles.signupSection}>
        <p>
          Don't have an account?{" "}
          <span onClick={() => openModal(<SignUp />)}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
