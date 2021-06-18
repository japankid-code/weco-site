import bgImage from '../assets/images/home-hero-bg.png';

function Hero() {
  const heroImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const bgGradient = {
    background: 'linear-gradient(to bottom, #000000bb 75%, #000000)'
  }

  const textShadow = {
    textShadow: '5px 5px 3px #0000003a'
  }

  return (
    <section id="hero" className="" style={heroImage}>
      <div className="flex flex-col items-center bg-black bg-opacity-50" style={bgGradient}>
        <div className="h-32 sm:h-36 md:h-40 lg:h-44"></div>
        <h1 className="text-5xl sm:text-6xl text-gray-100 whitespace-nowrap p-8" style={textShadow}>
          TEXTURING
        </h1>
        <div className="h-12"></div>
        
        <div className="h-48"></div>
      </div>
    </section>
  );
}

export default Hero;