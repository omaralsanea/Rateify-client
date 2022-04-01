import React from 'react';
import { useParams } from 'react-router-dom';
import { getArtistById } from '../../api/artist';
import { Link } from 'react-router-dom';

const ShowArtist = () => {
  const { id } = useParams();
  const [artist, setArtist] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getArtistById(id);
        setArtist(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [id]);

  return (
    <section className="section hero is-fullheight-with-navbar has-background-dark">
      <div className="container">
        {!artist ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className="title has-text-centered has-text-white">
              {artist.name}
            </h2>
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={artist.img} alt={artist.name} />
                </figure>
              </div>
              <div className="column is-half has-text-white">
                <h3>Biography</h3>

                <p className="my-2">{artist.bio}</p>
                <h2>Releases</h2>
                <div className="container is-flex">
                  {artist.releases.map((release) => {
                    return (
                      <div key={release._id} className="image is-128x128 m-2">
                        <Link to={`/releases/${release._id}`}>
                          <img src={release.artwork} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowArtist;
