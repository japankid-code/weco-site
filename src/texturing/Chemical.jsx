import React, { Component } from "react";

class Chemical extends Component {
  render() {
    return (
      <section className="flex flex-col items-center" style={styles}>
        <h2 className="text-gray-100 text-4xl m-8 mt-16">CHEMICAL</h2>
        <div className="flex-grow m-10 mt-0 text-gray-100 text-justify sm:max-w-xl xl:max-w-2xl">
          Chemical etching has many benefits over hard tooling production
          processes such as stamping and die cutting. It offers greater design
          flexibility and much lower set up costs. The etching process causes no
          mechanical distress to the material leaving parts burr- and
          stress-free with no changes to the material grain structure or
          magnetic properties.
        </div>
      </section>
    );
  }
}

const styles = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), repeating-linear-gradient(165deg, rgba(51,51,51, 0.12) 0px,transparent 7px,rgba(51,51,51, 0.12) 10px,transparent 17px,rgba(51,51,51, 0.12) 20px,transparent 27px,rgba(51,51,51, 0.12) 30px),repeating-linear-gradient(118deg, rgba(51,51,51, 0.12) 0px,transparent 7px,rgba(51,51,51, 0.12) 10px,transparent 17px,rgba(51,51,51, 0.12) 20px,transparent 27px,rgba(51,51,51, 0.12) 30px),repeating-linear-gradient(239deg, rgba(51,51,51, 0.12) 0px,transparent 7px,rgba(51,51,51, 0.12) 10px,transparent 17px,rgba(51,51,51, 0.12) 20px,transparent 27px,rgba(51,51,51, 0.12) 30px),linear-gradient(196deg, rgb(0,0,0),rgb(0,0,0))",

  // backgroundSize: 'cover',
  // backgroundPosition: 'center'
};

export default Chemical;
