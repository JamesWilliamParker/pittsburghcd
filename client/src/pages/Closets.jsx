import React from 'react';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';

// Import your images
import service_image_1 from '../assets/service_image_1.jpg';
import service_image_2 from '../assets/service_image_2.jpg';

const Closets = () => {
  return (
    <div>
      <Banner text="No pushy sales tactics. No phony discounts. No inflated prices. Simply a pleasurable experience with trustworthy experts!" width="100%" backgroundColor="#9f6f81" />
      <div>
        <ServiceCard image={service_image_1} header="Reach-In Closet" description="Custom-built reach-in closets designed to maximize space and style." />

        <Banner text="Lifetime Warranty: We provide a lifetime warranty against defects. Additionally, we guarantee our installation will be beautifully and properly installed." width="100%" backgroundColor="#9f6f81" />

        <ServiceCard image={service_image_2} header="Walk-In Closet" description="Organize your clothes and accessories efficiently with our personalized solutions." />
      </div>
    </div>
  );
};

export default Closets;
