import React from "react";
import API from "../../utils/API.js";
import landingIllustration from "../../img/assets/landing/landing-car-illustration.svg";

import "./HomePage.css";

import { Link } from "react-router-dom";

import Carousel from "../Carousel/index"

const HomePage = () => {
  return (
    <div className="l-homepage">
      <Link to="/login">
        <button className="homepage-button" type="primary">
          Se connecter
        </button>
      </Link>
      <Carousel />
      <div class="homepage-landing">
        <div class="homepage-landing-text">
          <h2 id="homepage-landing-title">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p id="homepage-landing-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            harum nulla ratione eius eveniet laborum tempora sunt perspiciatis
            rem id!
          </p>
          <button class="landing-cta">Explorer les voitures</button>
          <button class="landing-cta">Comment ça marche ?</button>
        </div>
        <div class="homepage-landing-image">
          <img src={landingIllustration} alt="" />
        </div>
      </div>

      <div className="homepage-howto">
        <h2 class="homepage-section-title">Comment ça marche ?</h2>
        <div className="howto-row">
          <div class="howto-image">
            <img src={landingIllustration} alt="" />
          </div>
          <div className="howto-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio
              quam deleniti similique dignissimos perspiciatis ipsum, laboriosam
              consequatur veritatis voluptatum. Ullam exercitationem cum minima
              ipsa! Illo fugit repellendus magnam tempore corporis, sit quidem
              ipsa cupiditate totam temporibus! Aspernatur, sed libero.
            </p>
          </div>
        </div>
        <div className="howto-row">
          <div className="howto-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio
              quam deleniti similique dignissimos perspiciatis ipsum, laboriosam
              consequatur veritatis voluptatum. Ullam exercitationem cum minima
              ipsa! Illo fugit repellendus magnam tempore corporis, sit quidem
              ipsa cupiditate totam temporibus! Aspernatur, sed libero.
            </p>
          </div>
          <div class="howto-image">
            <img src={landingIllustration} alt="" />
          </div>
        </div>
        <div className="howto-row">
          <div class="howto-image">
            <img src={landingIllustration} alt="" />
          </div>
          <div className="howto-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio
              quam deleniti similique dignissimos perspiciatis ipsum, laboriosam
              consequatur veritatis voluptatum. Ullam exercitationem cum minima
              ipsa! Illo fugit repellendus magnam tempore corporis, sit quidem
              ipsa cupiditate totam temporibus! Aspernatur, sed libero.
            </p>
          </div>
        </div>
      </div>

      <div className="homepage-available-cars" />
    </div>
  );
};

export default HomePage;
