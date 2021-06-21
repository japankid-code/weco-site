import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img0 from "../assets/images/homepage-carousel/0.png";
import img1 from "../assets/images/homepage-carousel/1.png";
import img2 from "../assets/images/homepage-carousel/2.png";
import img3 from "../assets/images/homepage-carousel/3.png";
import img4 from "../assets/images/homepage-carousel/4.png";
import img5 from "../assets/images/homepage-carousel/5.png";
import img6 from "../assets/images/homepage-carousel/6.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative z-50 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl 2xl:max-w-6xl">
      <Slider {...settings}>
        <div className="">
          <img src={img0} alt="" />
        </div>
        <div>
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
      </Slider>
    </div>
  );
}
