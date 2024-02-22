import React, { useState } from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// Carousel Photo Import

import homeCarouselPhoto1 from "../assets/homepage_carousel_photo1.jpg";
import homeCarouselPhoto2 from "../assets/homepage_carousel_photo2.jpg";
import homeCarouselPhoto3 from "../assets/homepage_carousel_photo3.jpg";
import homeCarouselPhoto4 from "../assets/homepage_carousel_photo4.jpg";
import homeCarouselPhoto5 from "../assets/homepage_carousel_photo5.jpg";
import homeCarouselPhoto6 from "../assets/homepage_carousel_photo6.jpg";
import homeCarouselPhoto7 from "../assets/homepage_carousel_photo7.jpg";

// Carousel Photo Logic

const items = [
  {
    src: homeCarouselPhoto1,
    header: "Closets",
    altText: "Photo of closet",
    caption: "Closets you’ll love, for any style and budget!",
    key: 1,
  },
  {
    src: homeCarouselPhoto2,
    header: "Doors",
    altText: "Photo of doors",
    caption:
      "Transform the entire look of your home, with dozens of doors styles to choose from!",
    key: 2,
  },
  {
    src: homeCarouselPhoto3,
    header: "Living Spaces",
    altText: "Photo of a living room",
    caption: "Amazing built-ins for every living space!",
    key: 3,
  },

  {
    src: homeCarouselPhoto4,
    header: "Entryways",
    altText: "Photo of an entryway",
    caption: "Entryways that will make you smile!",
    key: 4,
  },

  {
    src: homeCarouselPhoto5,
    header: "Garage Storage",
    altText: "Photo of a garage",
    caption: "Total garage makeovers!",
    key: 5,
  },

  {
    src: homeCarouselPhoto6,
    header: "Workspaces",
    altText: "Photo of an office",
    caption: "Home offices set up for success!",
    key: 6,
  },

  {
    src: homeCarouselPhoto7,
    header: "Storage Solutions",
    altText: "Photo of custom storage unit",
    caption: "Your dream Pantry, Laundry Area or Murphy Bed!",
    key: 7,
  },
];

// Carousel Function Logic:

function Example(args) {
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

export default Example;
