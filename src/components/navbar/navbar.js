import React, { useState } from "react";
import "./navbar.css";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState("List");
  const navToggle = () => {
    if (showMenu === "List") {
      setShowMenu("List menu_list");
    } else setShowMenu("List");
  };

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
      <div className={showMenu}>
        <li>HOME</li>
        <li>PORTFOLIO</li>
        <li>
          <Link to="/aboutme">ABOUTME</Link>
        </li>
        <li>CONTACTME</li>
      </div>
      <div onClick={navToggle} className="Menu">
        <CgMenu className="Open-Menu" size={30} />
        {/* <CgCloseR className="Close-Menu" onClick={() => setShowMenu(false)} /> */}
      </div>
    </div>
  );
};

export default Navbar;
