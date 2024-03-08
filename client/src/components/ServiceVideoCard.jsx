import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { Button } from "reactstrap";

const ServiceVideoCard = ({ videoId, header, description }) => {
  return (
    <div className="service-video-card">
      <div className="service-video-content" style={{ paddingTop: "6.2rem" }}>
        <h3 className="service-header">{header}</h3>
        <p className="service-description">{description}</p>
        <Button
          className="service-button"
          style={{
            backgroundColor: "#179d97",
            color: "white",
            padding: "10px",
          }}
          size="lg"
        >
          <Link
            to="/consultation"
            style={{ textDecoration: "none", color: "white" }}
          >
            Free Design Consultation
          </Link>
        </Button>
      </div>
      <div className="rounded-video-container">
        <YouTube videoId={"0Huazog37Qs"} className="service-video" />
      </div>
    </div>
  );
};

export default ServiceVideoCard;
