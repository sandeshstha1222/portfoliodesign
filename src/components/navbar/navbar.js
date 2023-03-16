import React, { useState } from "react";
import "./navbar.css";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="Navbar">
      <div className="Logo">
        <h1>
          Port<span style={{ color: "#4db5ff" }}>folio</span>
          <br />
          <span style={{ fontFamily: "Sacramento", fontSize: "15px" }}>
            Sandesh Shrestha
          </span>
        </h1>
      </div>
      <div className={showMenu ? "List Mobile-View" : "List"}>
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>ABOUTME</li>
        <li>CONTACTME</li>
      </div>
      <div className="Menu">
        <CgMenu className="Show-Menu" onClick={() => setShowMenu(true)} />
        <CgCloseR className="Close-Menu" onClick={() => setShowMenu(false)} />
      </div>
    </div>
  );
};

export default Navbar;
