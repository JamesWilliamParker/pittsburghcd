import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';

const ServiceCard = ({ image, header, description, reverse = false, noButton }) => {
  return (
    <Row className={reverse ? 'service-card-reverse' : 'service-card'}>
      <Col xs="12" md="12" lg="6">
        <img src={image} alt="Service" className="service-image-col" />
      </Col>
      <Col xs="12" md="12" lg="6" className="service-text">
        <h3 className="service-header">{header}</h3>
        <p className="service-description">{description}</p>
        {!noButton && (
          <Button
            className="service-button"
            style={{
              color: 'white',
              padding: '10px',
            }}
            size="lg"
          >
            <Link to="/consultation" style={{ textDecoration: 'none', color: 'white' }}>
              Free Design Consultation
            </Link>
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default ServiceCard;
