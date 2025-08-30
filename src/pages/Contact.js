import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "../css/Contact.css";

// Firebase Imports
import { db, rtdb } from "../firebase"; 
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, push, set } from "firebase/database";

export default function Contact() {
  const [form, setForm] = useState({ fname: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Save to Firestore
      await addDoc(collection(db, "contacts"), {
        fname: form.fname,
        email: form.email,
        message: form.message,
        createdAt: Timestamp.now(),
      });

      // ✅ Save to Realtime Database
      const newRef = push(ref(rtdb, "contacts"));
      await set(newRef, {
        fname: form.fname,
        email: form.email,
        message: form.message,
        createdAt: new Date().toISOString(),
      });

      alert("Message submitted successfully!✅");
      setForm({ fname: "", email: "", message: "" }); 
    } catch (error) {
      console.error("Error saving message: ", error);
      alert("❌ Something went wrong, try again.");
    }

    setLoading(false);
  };

  return (
    <>
      {/* Banner Section */}
      <section className="contact-banner">
        <img src="/images/contact-us.webp" alt="Contact Banner" />
        <div className="banner-overlay">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Let’s start a conversation.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Left Side - Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="subtitle">
              We’re here to answer your questions and help you grow.
            </p>

            <div className="info-box">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Address</h3>
                <p>
                  <br />
                  N/CA-604, CITY APARTMENT, AWC, GHAZIABAD, 201002
                </p>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p> INFO@DIGIHEALTECHNOLOGIES.COM </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h3>Tell Us About Your Project</h3>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={form.fname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
