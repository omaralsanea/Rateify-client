import React from 'react';
import ArtistCard from './ArtistCard';

import { getAllArtists } from '../api/artist';

const ArtistIndex = () => {
  const [artist, setArtist] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllArtists();
        setArtist(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns is-multiline'>
          {!artist ? (
            <p>Loading...</p>
          ) : (
            artist.map((artist) => <ArtistCard key={artist._id} {...artist} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtistIndex;
