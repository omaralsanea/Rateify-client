import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function CarouselGreatest({ releases }) {
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0%',
    slidesToShow: 5,
    dots: true,
    autoplay: false,
    draggable: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '25%',
          slidesToScroll: 1,

          dots: true
          // arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20%',
          slidesToScroll: 1,
          dots: true
          // arrows: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerPadding: '12%',
          slidesToScroll: 1,
          dots: true
          // arrows: false
        }
      }
    ]
  };
  if (!releases.length) {
    return null;
  }

  return (
    <Slider {...settings}>
      {releases.map((release) => (
        <div key={release.title} className="slider-element">
          <Link to={`/releases/${release._id}`}>
            <img src={release.artwork} alt={release.title} />
          </Link>
        </div>
      ))}
    </Slider>
  );
}
export default CarouselGreatest;
