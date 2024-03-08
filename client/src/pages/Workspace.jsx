import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_13 from '../assets/service_image_13.jpg';
import service_image_14 from '../assets/service_image_14.jpg';

const StorageSolutions = () => {
  return (
    <div className="page-container">
      <Banner
        text="No pushy sales tactics. No phony discounts. No inflated prices. Simply a pleasurable experience with trustworthy experts!"
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={service_image_13}
          header="Home Office"
          description="Make working from home even better!"
        />

        <Banner
          text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_14}
          header="Craft Rooms"
          description="Organized craft & play areas are the best areas!"
        />
      </div>
    </div>
  );
};

export default StorageSolutions;
