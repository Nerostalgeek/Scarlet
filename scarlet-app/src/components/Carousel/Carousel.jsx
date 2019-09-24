import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import carIcon from "../../img/assets/carousel/car-icon.png";
import locationIcon from "../../img/assets/carousel/placeholder.png";
import priceIcon from "../../img/assets/carousel/coins.png";
import noteIcon from "../../img/assets/carousel/star.png";

const data = [
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
    name: "Fiat 500",
    place: "Paris",
    note: "5/5",
    price: "50€"
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    centerMode: true
  };
  return (
    <div className="l-carousel">
      <Slider {...settings}>
        {data.map(({ img, name, place, note, price }) => {
          return (
            <div className="carousel-item">
              <img className="carousel-image" src={img} alt="" />
              <div className="cars-carousel-text">
                <p className="cars-carousel-name">
                  <span>
                    <img className="carousel-icon" src={carIcon} alt="" />
                  </span>
                  {name}
                </p>
                <p className="cars-carousel-location">
                  <span>
                    <img className="carousel-icon" src={locationIcon} alt="" />
                  </span>
                  Disponible à {place}
                </p>
                <p className="cars-carousel-note">
                  <span>
                    <img className="carousel-icon" src={noteIcon} alt="" />
                  </span>
                  {note}
                </p>
                <p className="cars-carousel-price">
                  <span>
                    <img className="carousel-icon" src={priceIcon} alt="" />
                  </span>
                  {price} par jour
                </p>
                <button className="carousel-button">Louer cette voiture</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
