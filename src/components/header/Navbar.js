// "use client" used to make server component into a client component
"use client"

import { useState } from "react";
import "./navbar.css";
import Link from "next/link";
import CommonModal from "../modals/CommonModal";



const Navbar = () => {

  // state to track modal value
  const[isModalOpen, setIsModalOpen] = useState(false);



  const openModal = () => {
    setIsModalOpen(true);
  }


  const closeModal = () => {
    setIsModalOpen(false);
  }


  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/">Logo</Link>
      </div>
      
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button onClick={openModal}>Login</button>
        </li>
      </ul>

      {/* Yahan pe Modal Dikhega */}

      {
        isModalOpen && (
          <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}/>
        )
      }
    </div>
  );
};

export default Navbar;
