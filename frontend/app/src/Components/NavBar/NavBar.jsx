import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { ComponentContext } from "../../ComponentContext/ComponentContext";
const Navbar = () => {
  const { sender } = useContext(ComponentContext);
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

        <button>
          {" "}
          {sender
            ? `${sender.slice(0, 7)}...${sender.slice(-5)}`
            : "No Account Connected"}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
