import React, { Component } from 'react';


class Chemical extends Component {

  
  render() {
    return (
      <section className="flex flex-col items-center" style={styles}>
        <h2 className="text-gray-100 text-4xl m-8 mt-16">Chemical</h2>
        <div className="h-96"></div>
      </section>
    );
  }
}

const styles = {
  backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%), repeating-linear-gradient(165deg, rgba(51,51,51, 0.12) 0px,transparent 7px,rgba(51,51,51, 0.12) 10px,transparent 17px,rgba(51,51,51, 0.12) 20px,transparent 27px,rgba(51,51,51, 0.12) 30px),repeating-linear-gradient(118deg, rgba(51,51,51, 0.12) 0px,transparent 7px,rgba(51,51,51, 0.12) 10px,transparent 17px,rgba(51,51,51, 0.12) 20px,transparent 27px,rgba(51,51,51, 0.12) 30px),repeating-linear-gradient(239deg, rgba(51,51,51, 0.12) 0px,transparent 7px,rgba(51,51,51, 0.12) 10px,transparent 17px,rgba(51,51,51, 0.12) 20px,transparent 27px,rgba(51,51,51, 0.12) 30px),linear-gradient(196deg, rgb(0,0,0),rgb(0,0,0))'
  
  // backgroundSize: 'cover',
  // backgroundPosition: 'center'
};


export default Chemical;