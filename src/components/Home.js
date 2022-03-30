import React from 'react';
import { Link } from 'react-router-dom';
import ReleaseCard from './release/ReleaseCard';
import Carousel from './Carousel';

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
      <h1 className='title is-3 has-text-centered'>
        Welcome to the Music Rating App!
      </h1>

      {releases && <Carousel releases={releases} />}
      {/* <h2 className='title is-4 has-text-centered'>Latest Releases</h2>
      <section className='section'>
        <div className='container'>
          <div className='columns is-flex-direction-row'>
            {!releases ? (
              <p>Loading Releases...</p>
            ) : (
              releases.map((release) => (
                <ReleaseCard key={release._id} {...release} />
              ))
            )}
          </div>
        </div>
      </section> */}
      <h2 className='title is-4 has-text-centered'>Highest Rated Releases</h2>
      <section className='section'>
        <div className='container'>
          <div className='columns is-flex-direction-row'>
            {!releases ? (
              <p>Loading Releases...</p>
            ) : (
              releases.map((release) => (
                <ReleaseCard key={release._id} {...release} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
