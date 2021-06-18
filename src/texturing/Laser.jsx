import React, { Component } from 'react';


class Laser extends Component {

  
  render() {
    return (
      <section className="flex flex-col items-center" style={styles}>
        <h2 className="text-gray-100 text-4xl m-8 mt-16">LASER</h2>
        <div className="h-96"></div>
      </section>
    );
  }
}

const styles = {
  backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), repeating-linear-gradient(0deg, rgba(163,163,163, 0.18) 0px, rgba(163,163,163, 0.18) 1px,transparent 1px, transparent 6px),repeating-linear-gradient(90deg, rgba(163,163,163, 0.18) 0px, rgba(163,163,163, 0.18) 1px,transparent 1px, transparent 6px),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center'
};


export default Laser;