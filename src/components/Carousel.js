import React from 'react';
import Slider from 'react-slick';

function Carousel({ releases }) {
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0%',
    slidesToShow: 3,
    dots: false,
    autoplay: false,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '25%',
          slidesToScroll: 1,

          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '20%',
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          centerPadding: '12%',
          slidesToScroll: 1,
          dots: true,
          arrows: false
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
        <div key={release._id}>
          <img src={release.artwork} alt={release.title} />
        </div>
      ))}
    </Slider>
  );
}
export default Carousel;
