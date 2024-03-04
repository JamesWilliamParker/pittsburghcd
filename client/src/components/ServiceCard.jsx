import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const ServiceCard = ({ image, header, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt="Service" className="service-image" />
      <div className="service-content">
        <h3 className="service-header">{header}</h3>
        <p className="service-description">{description}</p>
        <Button
          style={{
            backgroundColor: '#179d97',
            color: 'white',
            padding: '10px',
          }}
          size="lg"
        >
          <Link to="/consultation" style={{ textDecoration: 'none', color: 'white' }}>
            Free Design Consultation
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
