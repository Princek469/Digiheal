import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile nav
  const [openMenus, setOpenMenus] = useState({}); // track open submenus
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // toggle submenu (only in mobile)
  const toggleMenu = (menu) => {
    if (!isMobile) return; // desktop uses hover only
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // close mobile nav on link click
  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenMenus({});
  };

  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="brand">
        <a href="/">
          <img src="/images/logo.png" alt="Logo" />
        </a>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span><span></span><span></span>
      </div>

      {/* Navbar */}
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>

          {/* About */}
          <li>
            <button type="button" onClick={() => toggleMenu("about")}>
              About <span className="arrow">▼</span>
            </button>
            <ul className={openMenus["about"] ? "open" : ""}>
              <li>
                <a href="/about" onClick={handleLinkClick}>About Digiheal</a>
              </li>
            </ul>
          </li>

          {/* Services */}
          <li>
            <button type="button" onClick={() => toggleMenu("services")}>
              Our Services <span className="arrow">▼</span>
            </button>
            <ul className={`${openMenus["services"] ? "open" : ""} list`}>

             <li>
                <button type="button" onClick={() => toggleMenu("it")}>
                  IT Services ▶
                </button>
                <ul className={`${openMenus["it"] ? "open" : ""} nested-nested-list`}>
                 <li><a href="/softwareDev">Software Development & Support</a></li>
                  <li><a href="/itConsulting">IT Consulting</a></li>
                  <li><a href="/netSolu">Network Solutions</a></li>
                </ul>
              </li>

              <li>
                <button type="button" onClick={() => toggleMenu("learning")}>
                  Learning & Development ▶
                </button>
                <ul className={`${openMenus["learning"] ? "open" : ""} another-list`}>
                  <li>
                    <button type="button" onClick={() => toggleMenu("instructor")}>
                      Instructor Led Virtual Training ▶
                    </button>
                    <ul className={`${openMenus["instructor"] ? "open nested-list" : "nested-list"} nested-another-list`}>
                      <li><a href="/basicsOfComputer">Basic Computer Skills</a></li>
                      <li><a href="/programmingCoding">Programming & Coding</a></li>
                      <li><a href="/webDevelopment">Web Development</a></li>
                      <li><a href="/integration">Integration Technologies</a></li>
                      <li><a href="/artificialIntelligence">Artificial Intelligence</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

             
            </ul>
          </li>

          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
