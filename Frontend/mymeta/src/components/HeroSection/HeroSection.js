import React, { useState } from "react";

import Form from "../Form/Form";

import "./Glitch.css";

function HeroSection() {
  return (
    <div>
      <section
        className="text-gray-400 bg-gray-900 body-font"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/4c501d_131809e4210d454585b1d60dd93d1c7c~mv2.jpg/v1/fill/w_1200,h_601,al_c,q_85,enc_auto/4c501d_131809e4210d454585b1d60dd93d1c7c~mv2.jpg)",
        }}
      >
        <div className="justify-center container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div className="hero-container">
              <h2
                className="devnagri hero glitch layers"
                data-text="META VERSE"
              >
                <span>स्वागतम् In The</span>
              </h2>
              <h2
                className="devnagri hero glitch layers"
                data-text="META VERSE"
              >
                <span>मेटाVERस</span>
              </h2>
            </div>
          </div>
          <Form />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
