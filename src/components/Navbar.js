import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <h1>Anne Frank</h1>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item" onClick={handleClick}>
            <a href="#">Start</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a href="#anne">Anne</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a href="#dziennik">Dziennik</a>
          </li>
          <li className="nav-item" onClick={handleClick}>
            <a href="#kontakt">Kontakt</a>
          </li>
          <li className="btn" onClick={handleClick}>
            <a href="#subskrybuj">Subskrybuj</a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
