import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_3 from "../assets/service_image_3.jpg";
import service_image_4 from "../assets/service_image_4.jpg";
import service_image_5 from "../assets/service_image_5.jpg";

const Doors = () => {
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
          image={service_image_3}
          header="Interior Doors"
          description="Amazing what great looking, quality doors can do to a home."
        />

        <Banner
          text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_4}
          header="Exterior Doors"
          description="Styles & price points for every home makeover."
        />

        <Banner
          text="Speak directly with our team, not a 1-800 number! Experience personalized service every time you call!"
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_5}
          header="Closet Doors"
          description="Fabulous style for every door in the home."
        />
      </div>
    </div>
  );
};

export default Doors;
