import React from "react";
import "./navbar.css";
const UpGap = () => {
  return (
    <div
      className="Upgap"
      style={{
        top: "0",
        width: "100%",
        background: "#1f1f38",
        position: "fixed",
        height: "2em",
        backdropFilter: "blur(5px)",
      }}
    ></div>
  );
};

export default UpGap;
