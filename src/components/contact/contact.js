import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsMessenger, BsWhatsapp } from "react-icons/bs";
const contact = () => {
  return (
    <div id="contact" className="Contact">
      Get in Touch
      <div className="Contact-List">
        <div className="Contact-Box">
          <MdOutlineMail size={"1.5em"} />
          <p>Email</p>
          <p>Send a Message</p>
        </div>
        <div className="Contact-Box">
          <BsMessenger size={"1.5em"} />
          <p>Messenger</p>
          <p>Send a Message</p>
        </div>
        <div className="Contact-Box">
          <BsWhatsapp size={"1.5em"} />
          <p>Whatsapp</p>
          <p>Send a Message</p>
        </div>
      </div>
    </div>
  );
};

export default contact;
