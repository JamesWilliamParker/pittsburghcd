import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_6 from '../assets/service_image_6.jpg';

const Entryway = () => {
  return (
    <div>
      <Banner
        text="No pushy sales tactics. No phony discounts. No inflated prices. Simply a pleasurable experience with trustworthy experts!"
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={service_image_6}
          header="Mudroom"
          description="Great combinations of style & storage."
        />

        <Banner
          text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />
      </div>
    </div>
  );
};

export default Entryway;
