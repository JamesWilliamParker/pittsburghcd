import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_8 from "../assets/service_image_8.jpg";
import service_image_3v2 from "../assets/service_image_3v2.jpg";

const LivingSpaces = () => {
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
          image={service_image_3v2}
          header="Built-Ins"
          description="Making your living area ALIVE!"
        />

        <Banner
          text="Lifetime Warranty: Rest assured with our lifetime warranty against defects. Our guarantee extends to the flawless and meticulous installation of your project."
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
