import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="quick-links">
      <h2>quick link</h2>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/services">Services</a>
      </div>
      <div className="copy-right">
        <p>© 2023 Mohd Arshan</p>
        <h3>All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
