import bgImage from "../assets/images/machining/machining-hero-bg.png";

function Hero() {
  const heroImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgGradient = {
    background:
      "linear-gradient(90deg, rgba(0,0,0,1) 10%, rgba(0,0,0,.1) 20%, rgba(0,0,0,.1) 70%, rgba(0,0,0,1) 90%), linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(0,0,0,.3) 50%, rgba(0,0,0,1) 80%)",
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
          style={{ textShadow: "10px 7px 4px #000000ee" }}
        >
          MACHINING
        </h1>
        <div className="text-gray-100 mx-10 mt-6 mb-16 sm:max-w-xl xl:max-w-2xl text-justify">
          Using state-of-the-art computer hardware, software, and 4th axis
          capable machining, our machine centers produce complicated designs -
          even helical geometry - and computerized engraving on flat, contoured,
          and rotary shapes. We are capable of producing intricate prototypes
          and accurate repeatability of electrodes.
        </div>
      </div>
    </section>
  );
}

export default Hero;
