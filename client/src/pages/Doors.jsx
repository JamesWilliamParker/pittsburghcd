import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import service_image_3v2 from "../assets/service_image_3v2.jpg";
import service_image_4v2 from "../assets/service_image_4v2.jpg";
import service_image_5v3 from "../assets/service_image_5v3.jpg";

const Doors = () => {
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
          header="Interior Doors"
          description="Amazing what great looking, quality doors can do to a home."
        />

        <Banner
          text="Lifetime Warranty: Rest assured with our lifetime warranty against defects. Our guarantee extends to the flawless and meticulous installation of your project."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_4v2}
          header="Barn & Exterior Doors"
          description="Styles & price points for every home makeover."
        />

        <Banner
          text="Speak directly with our team, not a 1-800 number! Experience personalized service every time you call!"
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={service_image_5v3}
          header="Closet Doors"
          description="Fabulous style for every door in the home."
        />
      </div>
    </div>
  );
};

export default Doors;
