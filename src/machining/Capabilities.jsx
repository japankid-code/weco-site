import React, { Component } from "react";

class Capabilities extends Component {
  render() {
    return (
      <section className="">
        <div
          id="top-bar-rounder"
          className="border rounded-t-full text-white h-8"
          style={{ backgroundColor: "#99000f" }}
        ></div>
        <div id="top-bar-text" style={{ backgroundColor: "#99000f" }}>
          <span>GRAPHITE</span>
          <span>ALUMINUM</span>
          <span>TOOL STEEL</span>
        </div>
      </section>
    );
  }
}

export default Capabilities;
