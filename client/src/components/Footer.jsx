import React from "react";
import logo from "../assets/footer_logo_image.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ borderTop: "1px solid #ccc", paddingTop: "20px" }}
    >
      <div className="footer-column">
        <img src={logo} alt="Logo" style={{ width: "15%", height: "auto" }} />
        <div className="footer-content">
          <p style={{ marginBottom: ".1px", fontSize: "18px" }}>
            Address: Pittsburgh Closets & Doors
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            1916 Babcock Blvd., Pittsburgh, PA 15209
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            Office: 724-302-9514
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            Showroom: 724-209-4680
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            License: #PA140165
          </p>
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-header">Social Media</div>
        <div className="footer-content">
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            <a
              href="https://www.facebook.com/profile.php?id=61556068557103"
              style={{ color: "#874c62" }}
            >
              Facebook
            </a>
          </p>
          <p style={{ marginBottom: "260px", fontSize: "18px" }}>
            <a
              href="https://www.instagram.com/pittsburghclosetsanddoors/"
              style={{ color: "#874c62" }}
            >
              Instagram
            </a>
          </p>
          <p style={{ marginBottom: "20px", fontSize: "18px" }}>
            Copyright 2024
          </p>
        </div>
      </div>

      <div className="footer-column">
        <div className="footer-header">About Us</div>
        <div className="footer-content">
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            {/* <a href="/learn-about-us" style={{ color: "#874c62" }}>
              Learn About Us
            </a> */}
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            <a href="/careers" style={{ color: "#874c62" }}>
              Careers
            </a>
          </p>
          <p style={{ marginBottom: "10px", fontSize: "18px" }}>
            <a href="/privacy-policy" style={{ color: "#874c62" }}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
