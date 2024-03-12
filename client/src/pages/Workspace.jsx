import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_13 from '../assets/service_image_13.jpg';
import service_image_14 from '../assets/service_image_14.jpg';

const StorageSolutions = () => {
  return (
    <div className="page-container">
      <Banner
        text="Experience a refreshing approach: No aggressive sales tactics, no artificial discounts, and no inflated prices. Just a delightful experience with reliable experts!"
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
          text="Lifetime Warranty: Rest assured with our lifetime warranty against defects. Our guarantee extends to the flawless and meticulous installation of your project."
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
