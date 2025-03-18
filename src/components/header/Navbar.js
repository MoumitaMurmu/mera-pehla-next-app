// "use client" used to make server component into a client component
"use client";

import { useContext } from "react";
import "./navbar.css";
import Link from "next/link";
import CommonModal from "../modals/CommonModal";
import { ModalContext } from "@/context/ModalContext";
import Login from "../signup-signin/Login";
import Image from "next/image";
import logo from "../../../public/n-logo.webp";
const Navbar = () => {
  const { isModalOpen, openModal } = useContext(ModalContext);

  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src={logo} alt="website logo" width={40} placeholder="blur"/>
        </Link>
      </div>

      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button type="button" onClick={() => openModal(<Login />)}>
            Login
          </button>
        </li>
      </ul>

      {/* Yahan pe Modal Dikhega */}

      {isModalOpen && <CommonModal />}
    </div>
  );
};

export default Navbar;
