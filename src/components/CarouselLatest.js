import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function CarouselLatest({ releases }) {
  const sortedReleases = [...releases];
  console.log(typeof sortedReleases[0].createdAt);
  sortedReleases.sort((a, b) =>
    new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
  );
  const settings = {
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0%',
    slidesToShow: 5,
    dots: true,
    draggable: true,
    arrows: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: '25%',
          slidesToScroll: 2,

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
      {sortedReleases.map((release) => (
        <div
          key={release._id}
          className="slider-element has-text-centered is-inline-block"
        >
          <Link to={`/releases/${release._id}`}>
            <img src={release.artwork} alt={release.title} />
          </Link>
        </div>
      ))}
    </Slider>
  );
}
export default CarouselLatest;
