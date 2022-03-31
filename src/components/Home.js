import React from 'react';
import { Link } from 'react-router-dom';
import ReleaseCard from './release/ReleaseCard';
import CarouselLatest from './CarouselLatest';
import CarouselGreatest from './CarouselGreatest';
import { getAllReleases } from '../api/release';

const Home = () => {
  const [releases, setReleases] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllReleases();
        setReleases(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <section className="hero is-fullheight-with-navbar has-background-dark">
        <h1 className="title has-text-centered has-text-white mt-4">Rateify</h1>

        <div className="container">
          <h2 className="has-text-centered has-text-white my-4">
            {' '}
            Recently Added Releases{' '}
          </h2>
          {releases && <CarouselLatest releases={releases} />}
        </div>

        <div className="container">
          <h2 className="has-text-centered has-text-white my-4">
            {' '}
            Highest Rated Releases{' '}
          </h2>
          {releases && <CarouselGreatest releases={releases} />}
        </div>
      </section>
    </>
  );
};

export default Home;
