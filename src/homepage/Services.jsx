import React, { Component } from "react";
import circleBG from "../assets/images/circle-texture.png";

class Services extends Component {
  render() {
    return (
      <section className="min-w-min bg-black" style={styles}>
        <div
          id="x-gradient"
          className="min-w-full flex flex-col items-center"
          style={bgGradient}
        >
          <h4 className="text-6xl text-gray-100">SERVICES</h4>
          <nav
            id="service-cards"
            className="p-4 flex flex-row flex-wrap space-between justify-center lg:max-w-3xl 2xl:max-w-full"
          >
            <article
              className="p-4 m-4 flex items-center border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="m-2 flex-grow flex flex-col items-center"
                href="#texturing"
              >
                <img src="google.com" alt="" width="250px" height="230px" />
                <h5 className="text-3xl flex-end" style={{ color: "#99000f" }}>
                  TEXTURING
                </h5>
              </a>
            </article>
            <article
              className="p-4 m-4 flex items-center border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="m-2 flex-grow flex flex-col items-center"
                href="#engraving"
              >
                <img src="google.com" alt="" width="250px" height="230px" />
                <h5 className="text-3xl flex-end" style={{ color: "#99000f" }}>
                  ENGRAVING
                </h5>
              </a>
            </article>
            <article
              className="p-4 m-4 flex items-center border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="m-2 flex-grow flex flex-col items-center"
                href="#machining"
              >
                <img src="google.com" alt="" width="250px" height="230px" />
                <h5 className="text-3xl flex-end" style={{ color: "#99000f" }}>
                  MACHINING
                </h5>
              </a>
            </article>
            <article
              className="p-4 m-4 flex items-center border-8 rounded-sm"
              style={{ borderColor: "#99000f" }}
            >
              <a
                className="m-2 flex-grow flex flex-col items-center"
                href="#specialty"
              >
                <img src="google.com" alt="" width="250px" height="230px" />
                <h5 className="text-3xl flex-end" style={{ color: "#99000f" }}>
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

const styles = {
  backgroundImage: `url(${circleBG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const bgGradient = {
  background:
    "linear-gradient(to right,#000000, #ffffff00 50%, #000000), linear-gradient(to top,#000000, #ffffff00 50%, #000000)",
};

export default Services;
