import React from 'react';
import ReleaseCard from './ReleaseCard';
import { getAllReleases } from '../../api/release';

const ReleaseIndex = () => {
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
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
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
  );
};

export default ReleaseIndex;
