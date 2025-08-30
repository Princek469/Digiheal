import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="contact-info">
        <span><i className="fas fa-phone-alt"></i></span>
        <span><i className="fas fa-envelope"></i>INFO@DIGIHEALTECHNOLOGIES.COM</span>
      </div>
      <div className="social-links">
        <a href="#facebook" className="facebook"><FaInstagram /></a>
        <a href="#twitter" className="twitter"><FaTwitter /></a>
        <a href="#linkedin" className="linkedin"><FaLinkedinIn /></a>
      </div>
    </div>
  );
}
