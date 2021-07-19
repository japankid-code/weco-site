import React from "react";

import img0 from "../assets/images/machining/cnc-tools.png";

function Capabilities() {
  const bgImg = {
    backgroundImage: `url(${img0})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgGradient = {
    background:
      "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,.1) 20%, rgba(0,0,0,.1) 70%, rgba(0,0,0,1) 90%))",
  };

  return (
    <section className="mt-12 flex flex-col max-w-2xl w-full place-self-center">
      <div className="" style={bgGradient}>
        <div
          id="top-bar-rounder"
          className="rounded-t-full text-white h-4"
          style={{ backgroundColor: "#99000f" }}
        ></div>
        <div
          id="top-bar-text"
          className="flex-grow flex justify-between"
          style={{ backgroundColor: "#99000f" }}
        >
          <span className="m-2 mx-8 mb-2 text-2xl text-white">GRAPHITE</span>
          <span className="m-2 text-2xl text-white">ALUMINUM</span>
          <span className="m-2 mx-8 mb-2 text-2xl text-white">TOOL STEEL</span>
        </div>
        <div style={bgImg} className="flex flex-col">
          <span className="">INDUSTRIES SERVED</span>
          <span>STAMPING</span>
          <span>THERMOFORMING</span>
          <span>DIE CASTING</span>
          <span>PLASTICS</span>
          <span>LIQUID SILICONE RUBBER</span>
        </div>
        <div
          id="bottom-bar-rounder"
          className="rounded-b-full text-white h-4"
          style={{ backgroundColor: "#99000f" }}
        ></div>
      </div>
    </section>
  );
}

export default Capabilities;
