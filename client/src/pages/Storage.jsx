import React from "react";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";

// Import your images
import storageImage1 from "../assets/test_reach-in_closet.jpg";
import storageImage2 from "../assets/test_reach-in_closet.jpg";

const StorageSolutions = () => {
  return (
    <div>
      <Banner
        text="Discover smart storage solutions to declutter your space and simplify your life."
        width="100%"
        height="55px"
        backgroundColor="#9f6f81"
      />
      <div>
        <ServiceCard
          image={storageImage1}
          header="Closet Organizers"
          description="Maximize your closet space with our range of customizable organizers."
        />

        <Banner
          text="From pantry to garage, we have storage solutions for every area of your home."
          width="100%"
          height="55px"
          backgroundColor="#9f6f81"
        />

        <ServiceCard
          image={storageImage2}
          header="Storage Bins & Boxes"
          description="Keep your belongings organized and easily accessible with our selection of bins and boxes."
        />
      </div>
    </div>
  );
};

export default StorageSolutions;
