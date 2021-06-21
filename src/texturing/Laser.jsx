import React, { Component } from "react";

class Laser extends Component {
  render() {
    return (
      <section className="flex flex-col items-center" style={styles}>
        <h2 className="text-gray-100 text-4xl m-8 mt-16">LASER</h2>
        <div className="flex-grow mx-10 text-gray-100 text-justify sm:max-w-xl xl:max-w-2xl">
          Our laser texturing services allow you to easily and with infinite
          repeatability make your mark on 3D geometries in a wide range of
          industries including automotive interiors, automotive lighting, tire,
          consumer electronics, packaging, cosmetic, luxury goods, medical, home
          appliances, tooling, mold making, and lifestyle/consumer products like
          shoes, sporting products and more. laser texturing is poised to
          transform the texturing of plastic injection molds and allow designers
          to innovate without limits thanks to our unique laser texturing
          product portfolio answering your specific needs: laser texturing,
          laser blasting, laser engraving, and laser etching services can be
          answered with the same and unique solution.
        </div>
      </section>
    );
  }
}

const styles = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), repeating-linear-gradient(0deg, rgba(163,163,163, 0.18) 0px, rgba(163,163,163, 0.18) 1px,transparent 1px, transparent 6px),repeating-linear-gradient(90deg, rgba(163,163,163, 0.18) 0px, rgba(163,163,163, 0.18) 1px,transparent 1px, transparent 6px),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))",
  // backgroundSize: 'cover',
  // backgroundPosition: 'center'
};

export default Laser;
