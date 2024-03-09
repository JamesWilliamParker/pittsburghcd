import logo from "../assets/pcd_logo_v1.png";
import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-column">
          <img src={logo} alt="Logo" style={{ width: "35%", height: "auto" }} />
          <div className="footer-content">
            <p style={{ marginBottom: ".1px", fontSize: "18px" }}>
              Address: Pittsburgh Closets & Doors
            </p>
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              1916 Babcock Blvd., Pittsburgh, PA 15209
            </p>
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              Office: (724) 201-6421
            </p>
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              Showroom: (724)-209-4680
            </p>
            <p style={{ marginBottom: "10px", fontSize: "18px" }}>
              License: #PA140165
            </p>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-header">Social Media</div>
          <div className="footer-content">
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61556068557103"
                style={{ color: "#874c62" }}
              >
                Facebook
              </a>
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/pittsburghclosetsanddoors/"
                style={{ color: "#874c62" }}
              >
                Instagram
              </a>
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
      <Row>
        <Col>
          <div>
            <p>Copyright 2024</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
