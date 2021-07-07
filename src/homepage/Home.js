import React, { useState } from "react";
import Hero from "./Hero";
import Whatwedo from "./Whatwedo";
import Services from "./Services";

import img0 from "../assets/images/homepage/homepage-carousel/0.png";
import img1 from "../assets/images/homepage/homepage-carousel/1.png";
import img2 from "../assets/images/homepage/homepage-carousel/2.png";
import img3 from "../assets/images/homepage/homepage-carousel/3.png";
import img4 from "../assets/images/homepage/homepage-carousel/4.png";
import img5 from "../assets/images/homepage/homepage-carousel/5.png";
import img6 from "../assets/images/homepage/homepage-carousel/6.png";

const imageList = [img0, img1, img2, img3, img4, img5, img6];

function Home() {
  return (
    <main className="flex-grow">
      <Hero></Hero>
      <Whatwedo imageList={imageList}></Whatwedo>
      <Services></Services>
    </main>
  );
}

export default Home;
