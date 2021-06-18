import bgImage from '../assets/images/texturing-hero-bg.png';

function Hero() {
  const heroImage = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const bgGradient = {
    background: 'linear-gradient(to bottom, #000000ee 50%, #000000)'
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
        <div className="grid grid-cols-2 w-96">
          <a className='text-gray-100 text-2xl text-center m-4 p-1 rounded-xl ring-2' 
            href='#laser' 
            style={{background: '#0081C3'}}
          >
            LASER
          </a>
          <a className='text-gray-100 text-2xl text-center m-4 p-1 rounded-xl ring-2'
            href='#chemical'
            style={{background: '#0081C3'}}
          >
            CHEMICAL
          </a>
        </div>
        <div className='text-gray-100 mx-10 mt-6 mb-16 sm:max-w-xl xl:max-w-2xl text-justify'>
          At Wisconsin Engraving, we understand our customers have specific requirements 
          that need to be met. Whether it is satisfying strict appearance tolerances 
          or producing solutions that deliver consistent finishes that stand out. Through
          the use of this state-of-the-art technology, our team removes the restrictions
          of all projects allowing even the most complex of challenges to be realized.
        </div>
        
      </div>
    </section>
  );
}

export default Hero;