import React from "react";
import { FaDiscord, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* 1st column */}
        <div className="footer-about">
          <h1>
            <a>Port</a>
            <b>Folio</b>
          </h1>
        </div>
        {/*2nd Column*/}
        <div className="footer-email">
          <p>Email Me </p>
          <form action="#">
            <input
              type="email"
              required // must required to fill
              placeholder="Email"
            />
            <input type="Submit" value="Submit" />
          </form>
        </div>
        {/* 3rd Column */}
        <div className="footer-social">
          <p>Follow Us</p>
          <div className="footer-social-icons">
            <div>
              <FaFacebook className="icons" />
            </div>
            <div>
              <FaInstagram className="icons" />
            </div>
            <div>
              <FaDiscord className="icons" />
            </div>
            <div>
              <FaYoutube className="icons" />
            </div>
          </div>
        </div>
        {/* 4th Column */}
        <div className="footer-contact">
          <p>Call Us</p>
          <p>+9779846752387</p>
        </div>
      </div>
      <div className="footer-bottom-section">
        <hr /> {/*horizontal line drawing*/}
        <div className="bottom-container">
          <p>@{new Date().getFullYear()}. All Rights Reserved</p>
          <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
