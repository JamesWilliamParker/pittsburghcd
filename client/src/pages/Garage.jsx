import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_7 from '../assets/service_image_7.jpg';

const GarageStorage = () => {
  return (
    <div className="page-container">
      <Banner text="No pushy sales tactics. No phony discounts. No inflated prices. Simply a pleasurable experience with trustworthy experts!" width="100%" height="55px" backgroundColor="#9f6f81" />
      <div>
        <ServiceCard image={service_image_7} header="Garage" description="Various options for some of your most valued items." />

        <Banner text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed." width="100%" height="55px" backgroundColor="#9f6f81" />
      </div>
    </div>
  );
};

export default GarageStorage;
