import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    {
        "img": "https://cdn.pixabay.com/photo/2015/06/22/08/11/auto-817343_960_720.jpg",
        "name": "Fiat 500",
        "place": "Paris",
        "note": "5/5",
        "price": "50€",
    },
    
];

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            centerMode: true,
        };
        return (
            <div>
                <Slider {...settings}>
                    {data.map(({img, name, place, note, price}) => {
                        return (
                            <div>
                                <img src={img} alt=""/>
                                <p>{name}</p>
                                <p>{place}</p>
                                <p>{note}</p>
                                <p>{price}</p>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}

export default Carousel