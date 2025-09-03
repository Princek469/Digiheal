import React, { useState } from "react";
import {
  FaHome,
  FaEnvelope,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "emailjs-com";

// Firebase Imports
import { db, rtdb } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, push, set } from "firebase/database";

function Footer() {


  //Socila Media linls
  function handleSocialMedia(){
    alert('Social Media Link Creation is in Progress!')
  }


  const [form, setForm] = useState({ fname: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Save to Firestore
      await addDoc(collection(db, "footerContacts"), {
        name: form.fname,
        email: form.email,
        message: form.message,
        createdAt: Timestamp.now(),
      });

      

      // ✅ Save to Realtime Database
      const newRef = push(ref(rtdb, "footerContacts"));
      await set(newRef, {
        name: form.fname,
        email: form.email,
        message: form.message,
        createdAt: new Date().toISOString(),
      });

        await emailjs.send(
      "service_43t3aue",   // 🔹 replace with your EmailJS Service ID
      "template_gso6tdt",  // 🔹 replace with your EmailJS Template ID
      {
        fname: form.fname,
    email: form.email,
    message: form.message,
    time: new Date().toLocaleString(),
      },
      "e7Z_eZtSqMy9sS1mG"    // 🔹 replace with your EmailJS Public Key
    );

      alert("✅ Message submitted successfully!");
      setForm({ fname: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error saving footer form: ", error);
      alert("❌ Something went wrong, try again.");
    }

    setLoading(false);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Us */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaHome className="footer-icon" />
              <p>N/CA-604, CITY APARTMENT, AWC, GHAZIABAD, 201002</p>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:INFO@DIGIHEALTECHNOLOGIES.COM">
                INFO@DIGIHEALTECHNOLOGIES.COM
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" onClick={handleSocialMedia} className="instagram"><FaInstagram /></a>
            <a href="#" onClick={handleSocialMedia} className="twitter"><FaTwitter /></a>
            <a href="#" onClick={handleSocialMedia} className="linkedin"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <form className="footer-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="fname"
                placeholder="Enter Name"
                value={form.fname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} DigiHeal. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
