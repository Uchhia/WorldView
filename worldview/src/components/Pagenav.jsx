import React from "react";
import styles from "./PageNav.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Pagenav() {
  return (
    <div className={styles.nav}>
      {/* In Nav link we can use style it assign class autmatically */}
      <Logo />
      <ul>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
      {/* this is simple link
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="">dummy</Link>
        </li>
      </ul> */}
    </div>
  );
}
