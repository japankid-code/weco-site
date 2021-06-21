import bgImage from "../assets/images/texturing/texturing-hero-bg.png";

function Hero() {
  const heroImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgGradient = {
    background:
      "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,.3) 50%, rgba(0,0,0,1) 90%), linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(0,0,0,.3) 50%, rgba(0,0,0,1) 80%)",
  };

  const textShadow = {
    textShadow: "10px 7px 4px #000000ee",
  };

  return (
    <section id="hero" className="" style={heroImage}>
      <div
        className="flex flex-col items-center bg-black bg-opacity-50"
        style={bgGradient}
      >
        <div className="h-32 sm:h-36 md:h-40 lg:h-44"></div>
        <h1
          className="text-5xl sm:text-6xl text-gray-100 whitespace-nowrap p-8"
          style={textShadow}
        >
          TEXTURING
        </h1>
        <div className="grid grid-cols-2 w-96">
          <a
            className="text-gray-100 text-2xl shadow text-center m-4 p-1 rounded-xl ring-2"
            href="#laser"
            style={{ background: "#0081C3" }}
          >
            LASER
          </a>
          <a
            className="text-gray-100 text-2xl shadow text-center m-4 p-1 rounded-xl ring-2"
            href="#chemical"
            style={{ background: "#0081C3" }}
          >
            CHEMICAL
          </a>
        </div>
        <div className="text-gray-100 mx-10 mt-6 mb-16 sm:max-w-xl xl:max-w-2xl text-justify">
          At Wisconsin Engraving, we understand our customers have specific
          requirements that need to be met. Whether it is satisfying strict
          appearance tolerances or producing solutions that deliver consistent
          finishes that stand out. Through the use of this state-of-the-art
          technology, our team removes the restrictions of all projects allowing
          even the most complex of challenges to be realized.
        </div>
      </div>
    </section>
  );
}

export default Hero;
