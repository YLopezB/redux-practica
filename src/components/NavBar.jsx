// components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./cart";
import ModalCart from "./ModalCart";

const routes = [{ to: "/store", text: "STORE" }];

const Navbar = () => {
  return (
    <nav style={styles.nav} className="justify-between">
      {routes.map((r) => (
        <NavLink key={r.to} to={r.to} style={styles.link}>
          {r.text}
        </NavLink>
      ))}
      <Cart/>
      <ModalCart/>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "10px",
    backgroundColor: "#333",
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  button: {
    marginLeft: "auto",
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: "#ff4d4d",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
  },
};

export default Navbar;
