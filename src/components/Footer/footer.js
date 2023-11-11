import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} All Rights Reserved | Made with ❤️ by Sanjeet Kumar
    </footer>
  );
};

export default Footer;
