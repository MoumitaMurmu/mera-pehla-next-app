import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/papay-logo.png"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <ul>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
            <Link href="/resources">Resources</Link>
          </li>
          <li>
            <Link href="/company">Company</Link>
          </li>
          <li>
            <Link href="/template">Templates</Link>
          </li>
        </ul>
      </div>
      <div>
      <Image src={logo} alt="logo" width={100}/>
      </div>
      {/* <div>
        <p>Copyright 2025 Papaya | All rights reserved.</p>
      </div> */}
    </div>
  );
};

export default Footer;
