import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function WecoCarousel(props) {
  const { imageList } = props;
  const [img0, img1, img2, img3, img4, img5, img6] = imageList;
  return (
    <Carousel
      showArrows={true}
      centerMode={true}
      centerSlidePercentage={95}
      infiniteLoop={true}
      className="max-w-xl lg:max-w-3xl"
    >
      <div className="flex items-center">
        <img src={img0} alt="" />
      </div>
      <div className="self-center">
        <img src={img1} alt="" />
      </div>
      <div>
        <img src={img2} alt="" />
      </div>
      <div>
        <img src={img3} alt="" />
      </div>
      <div>
        <img src={img4} alt="" />
      </div>
      <div>
        <img src={img5} alt="" />
      </div>
      <div>
        <img src={img6} alt="" />
      </div>
    </Carousel>
  );
}

export default WecoCarousel;
