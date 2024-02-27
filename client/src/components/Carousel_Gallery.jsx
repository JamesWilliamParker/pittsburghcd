import React, { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// Carousel Photo Import
import galleryCarouselImage1 from "../assets/gallery_c_img1.jpg";
import galleryCarouselImage2 from "../assets/gallery_c_img2.jpg";
import galleryCarouselImage3 from "../assets/gallery_c_img3.jpg";
import galleryCarouselImage4 from "../assets/gallery_c_img4.jpg";
import galleryCarouselImage5 from "../assets/gallery_c_img5.jpg";
import galleryCarouselImage6 from "../assets/gallery_c_img6.jpg";
import galleryCarouselImage7 from "../assets/gallery_c_img7.jpg";
import galleryCarouselImage8 from "../assets/gallery_c_img8.jpg";

// Carousel Photo Logic
const items = [
  {
    src: galleryCarouselImage1,
    header: "Walk-In Closets",
    altText: "Photo of walk-in closet",
    caption:
      "Custom closets tailored to your wardrobe, fit for all styles and budgets.",
    key: 1,
  },
  {
    src: galleryCarouselImage2,
    header: "Reach-In Closets",
    altText: "Photo of reach-in closet",
    caption: "Creating big uses for the smaller closets in the home.",
    key: 2,
  },
  {
    src: galleryCarouselImage3,
    header: "Stylish Doors",
    altText: "Photo of Stylish Doors",
    caption:
      "Updated, stylish internal doors create that “Extreme Makeover” look throughout the entire home.",
    key: 3,
  },
  {
    src: galleryCarouselImage4,
    header: "Laundry Areas",
    altText: "Photo of Organized Laundry Area",
    caption:
      "Beautiful creations, responsible for putting a smile on the face of anyone doing laundry.",
    key: 4,
  },
  {
    src: galleryCarouselImage5,
    header: "Home Office",
    altText: "Photo of Home Office",
    caption:
      "Discover the joy of working from home, where beauty meets organization.",
    key: 5,
  },
  {
    src: galleryCarouselImage6,
    header: "Entryway/Mudroom",
    altText: "Photo of Entryway or Mudroom",
    caption:
      "The days of shoes, coats, hats, and other items like sports gear not having a specific place, are over.",
    key: 6,
  },
  {
    src: galleryCarouselImage7,
    header: "Garage Storage",
    altText: "Photo of Garage Storage",
    caption:
      "Enhance your garage with a custom makeover for vehicle protection, cleanliness, safety, resale value, and extra space.",
    key: 7,
  },
  {
    src: galleryCarouselImage8,
    header: "Closet Doors",
    altText: "Photo of Closet Doors",
    caption:
      "Yes, of course we feel that new stylish closet doors should accompany our beautiful closet designs. The picture above says it all.",
    key: 8,
  },
];

// Carousel Function Logic:

function Carousel_Gallery(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-image" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.header}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      className="carousel-gallery" // Added a class for styling
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carousel_Gallery;
