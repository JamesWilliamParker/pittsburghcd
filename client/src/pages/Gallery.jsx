import ServiceVideoCard from '../components/ServiceVideoCard';
import BulletCard from '../components/BulletCard';
import Carousel_Gallery from '../components/Carousel_Gallery';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const Gallery = () => {
  return (
    <div className="page-container">
      {/* The ServiceVideoCard */}
      <ServiceVideoCard videoId="0Huazog37Qs" header="Discover the beauty of a perfectly organized home." description="The perfect combination of Quality & Beauty, tailored to your style and budget!" />

      {/* The BulletCard */}
      <BulletCard
        leftHeader="Meet & Greet In-Home Consultation"
        centerHeader="Custom 3D Design & Visuals"
        rightHeader="Professional Installation by Our Team"
        fontSize="25px"
        lineColor="#9f6f81" // Color of the lines
      />

      {/* The Carousel */}
      <div style={{ marginTop: '150px' }}>
        <Carousel_Gallery />
      </div>

      {/* The Button */}
      <div className="mt-5">
        <Link to="/consultation">
          <Button className="service-button" size="lg">
            Free Design Consultation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
