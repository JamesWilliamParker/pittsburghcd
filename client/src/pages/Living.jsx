import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_8 from "../assets/service_image_8.jpg";
import service_image_17 from "../assets/service_image_17.jpg";

const LivingSpaces = () => {
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
          image={service_image_17}
          header="Built-Ins"
          description="Making your living area ALIVE!"
        />

        <Banner
          text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_8}
          header="Entertainment Centers"
          description="Bringing style and function to your home's entertainment spaces."
        />
      </div>
    </div>
  );
};

export default LivingSpaces;
