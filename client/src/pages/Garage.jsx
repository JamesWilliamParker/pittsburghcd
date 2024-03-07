import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_7 from '../assets/service_image_7.jpg';

const GarageStorage = () => {
  return (
    <div>
      <Banner text="Maximize your garage space with our efficient storage solutions." width="100%" height="55px" backgroundColor="#9f6f81" />
      <div>
        <ServiceCard image={service_image_7} header="Garage" description="Various options for some of your most valued items." />

        <Banner text="Our durable and customizable storage options help you keep your garage organized." width="100%" height="55px" backgroundColor="#9f6f81" />
      </div>
    </div>
  );
};

export default GarageStorage;
