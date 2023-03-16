import React, { useState } from "react";
import "./navbar.css";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={showMenu}>
          <li

          //   onClick={() => setActiveNav("/header")}
          //   className={activeNav === "/" ? "active" : ""}
          >
            <a href="#">HOME</a>
          </li>
          <li

          // onClick={() => setActiveNav("/portfolio")}
          // className={activeNav === "/portfolio" ? "active" : ""}
          >
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li

          //   onClick={() => setActiveNav("/aboutme")}
          //   className={activeNav === "/aboutme" ? "active" : ""}
          >
            <a href="#about">ABOUTME</a>
          </li>
          <li

          // onClick={() => setActiveNav("/contactme")}
          // className={activeNav === "/contactme" ? "active" : ""}
          >
            <a href="#contact">CONTACTME</a>
          </li>
        </div>
        <div onClick={navToggle} className="Menu">
          <CgMenu className="Open-Menu" size={30} />
          {/* <CgCloseR className="Close-Menu" onClick={() => setShowMenu(false)} /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
