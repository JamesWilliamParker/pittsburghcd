// why.jsx
import React from "react";
import WhyCard from "../components/WhyCard"; // Adjust the path accordingly
import { Link } from "react-router-dom";
import WhyImage1 from "../assets/test_reach-in_closet.jpg";
import ServiceCard2 from "../components/ServiceCard2"; // Adjust the path accordingly

const Why = () => {
  return (
    <div>
      {/* Other content on your WhyPage */}
      
      
      
      {/* Example usage of ServiceCard2 */}
      <ServiceCard2
        image={WhyImage1} // Use the imported image variable
        header="Your Service Header"
        description="Your service description goes here."
      />
      {/* Example usage of WhyCard */}
      <WhyCard header="Your First Header" />
      
      {/* Add more instances of WhyCard as needed */}

      
      {/* Other content on your WhyPage */}
      
      {/* Example usage of Link */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to="/consultation"
          className="service-button"
          style={{ textDecoration: "none" }}
        >
          Free Design Consultation
        </Link>
      </div>
    </div>
  );
};

export default Why;
