import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
    const url = [
        "/assets/images/badging4.jpg",
        "/assets/images/badging5.jpg",
        "/assets/images/scale16.jpg",
        "/assets/images/scale6.jpg"
    ];

    // Settings for react-slick Slider
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
        <div className="slideshow">
            <Slider {...settings}>
                {url.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`slide-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slideshow;