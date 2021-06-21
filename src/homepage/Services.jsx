import React, { Component } from "react";

import texturingIcon from "../assets/images/homepage/texturing-icon.png";
import engravingIcon from "../assets/images/homepage/engraving-icon.png";
import machiningIcon from "../assets/images/homepage/machining-icon.png";
import specialtyIcon from "../assets/images/homepage/specialty-icon.png";

class Services extends Component {
  render() {
    return (
      <section className="min-w-min bg-black">
        <div
          id="x-gradient"
          className="min-w-full flex flex-col items-center"
          style={bgGradient}
        >
          <h4 className="text-6xl text-gray-100 mt-16">SERVICES</h4>
          <nav
            id="service-cards"
            className="p-4 flex flex-row flex-wrap space-between justify-center lg:max-w-3xl 2xl:max-w-full"
          >
            <article
              className="p-4 m-4 flex border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="flex-grow flex flex-col items-center"
                href="/texturing"
              >
                <img
                  src={texturingIcon}
                  alt=""
                  width="218px"
                  className="m-4 mt-2"
                />
                <h5 className="text-4xl flex-end" style={{ color: "#99000f" }}>
                  TEXTURING
                </h5>
              </a>
            </article>
            <article
              className="p-4 pb-3 m-4 flex border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="flex-grow flex flex-col items-center justify-end"
                href="/engraving"
              >
                <img src={engravingIcon} alt="" width="250px" />
                <h5
                  className="text-4xl  mt-3 flex-end"
                  style={{ color: "#99000f" }}
                >
                  ENGRAVING
                </h5>
              </a>
            </article>
            <article
              className="p-4 m-4 flex border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="flex-grow flex flex-col items-center"
                href="/machining"
              >
                <img src={machiningIcon} alt="" width="245px" />
                <h5
                  className="text-4xl flex-end pt-4"
                  style={{ color: "#99000f" }}
                >
                  MACHINING
                </h5>
              </a>
            </article>
            <article
              className="p-4 m-4 flex border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a className="flex flex-col items-center" href="/specialty">
                <img src={specialtyIcon} alt="" width="250px" />
                <h5
                  className="text-4xl flex-end pt-4"
                  style={{ color: "#99000f" }}
                >
                  SPECIALTY
                </h5>
              </a>
            </article>
          </nav>
        </div>
      </section>
    );
  }
}

const bgGradient = {
  background:
    "linear-gradient(to right, #000000, #00000055 50%, #000000), linear-gradient(to top,#000000, #00000055 50%, #000000), repeating-linear-gradient(122deg, hsla(238,0%,76%,0.12) 0px,transparent 2px,hsla(238,0%,76%,0.12) 5px,transparent 8px,hsla(238,0%,76%,0.12) 11px),repeating-linear-gradient(218deg, hsla(238,0%,76%,0.12) 0px,transparent 2px,hsla(238,0%,76%,0.12) 5px,transparent 8px,hsla(238,0%,76%,0.12) 11px),repeating-linear-gradient(0deg, rgba(0,0,0, 0.07) 0px, rgba(0,0,0, 0.07) 0px,transparent 0px, transparent 1px,rgba(0,0,0, 0.07) 1px, rgba(0,0,0, 0.07) 4px,transparent 4px, transparent 5px,rgba(0,0,0, 0.07) 5px, rgba(0,0,0, 0.07) 8px),repeating-linear-gradient(90deg, rgba(0,0,0, 0.07) 0px, rgba(0,0,0, 0.07) 0px,transparent 0px, transparent 1px,rgba(0,0,0, 0.07) 1px, rgba(0,0,0, 0.07) 4px,transparent 4px, transparent 5px,rgba(0,0,0, 0.07) 5px, rgba(0,0,0, 0.07) 8px),linear-gradient(90deg, rgb(37,37,37),rgb(37,37,37))",
};

export default Services;
