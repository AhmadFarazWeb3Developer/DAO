import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Needy</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Why Needy ?</li>
        </ul>
        <button>Connect Wallet</button>
      </nav>
    </>
  );
};
export default Navbar;
