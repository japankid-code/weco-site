import bgImage from "../assets/images/homepage/home-hero-bg.png";

function Hero() {
  const heroImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgGradient = {
    background: "linear-gradient(to bottom, #00000020 65%, #000000)",
  };

  return (
    <section id="hero" className="" style={heroImage}>
      <div className="flex flex-col items-center" style={bgGradient}>
        <h1
          className="mt-48 text-xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-100 whitespace-nowrap p-8"
          style={{ textShadow: "-3px -3px 5px #000000ee" }}
        >
          CRAFTSMEN DEDICATED TO DETAIL
        </h1>
        <div
          id="greeting-card"
          className="p-6 px-8 m-8 mb-48 bg-gray-900 bg-opacity-60 rounded-lg shadow-md"
        >
          <h2 className="text-md lg:text-xl text-gray-200 text-justify max-w-lg lg:max-w-2xl">
            Since 1922, Wisconsin Engraving Company is constantly exploring new
            techniques and investing in research and development to give our
            customers the competitive edge.
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
