import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function WecoCarousel(props) {
  const { imageList } = props;
  const imageEls = imageList.map((img, i) => (
    <div className="flex h-full">
      <img src={img} alt="" key={i} className="object-cover" />
    </div>
  ));
  return (
    <Carousel
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={98}
      infiniteLoop={true}
      className="max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl"
    >
      {imageEls}
    </Carousel>
  );
}

export default WecoCarousel;
