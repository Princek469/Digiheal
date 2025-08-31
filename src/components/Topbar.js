import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


export default function Topbar() {

  function handleSocialMedia(){
    alert("Social Media Link Creation is in progress !");
  }

  return (
    <div className="topbar">
      <div className="contact-info">
        <span><i className="fas fa-phone-alt"></i></span>
        <span><i className="fas fa-envelope"></i>INFO@DIGIHEALTECHNOLOGIES.COM</span>
      </div>
      <div className="social-links">
        <a href="#" className="instagram" onClick={handleSocialMedia}><FaInstagram /></a>
        <a href="#" className="twitter" onClick={handleSocialMedia}><FaTwitter /></a>
        <a href="#" className="linkedin" onClick={handleSocialMedia}><FaLinkedinIn /></a>
      </div>
    </div>
  );
}
