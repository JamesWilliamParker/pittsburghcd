import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_7 from '../assets/service_image_7.jpg';

const GarageStorage = () => {
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
          image={service_image_7}
          header="Garage"
          description="Various options for some of your most valued items."
        />

        <Banner
          text="Lifetime Warranty: Rest assured with our lifetime warranty against defects. Our guarantee extends to the flawless and meticulous installation of your project."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />
      </div>
    </div>
  );
};

export default GarageStorage;
