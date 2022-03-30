import React from 'react';
import { useParams } from 'react-router-dom';
import { getReleaseById } from '../../api/release';
import { Link } from 'react-router-dom';
import Spotify from 'react-spotify-embed';

const ReleaseShow = () => {
  const { id } = useParams();
  console.log(useParams());
  console.log('Release ID', id);
  const [release, setRelease] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getReleaseById(id);
        console.log('DATA IS ', data);
        setRelease(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [id]);

  return (
    <section className="section">
      <div className="container">
        {!release ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={release.artwork} alt={release.title} />
                </figure>
              </div>
              <div className="column is-half">
                <h2 className="title has-text-centered">{release.title}</h2>
                <h2 className="title has-text-centered">
                  <Link to={`/artists/${release.artist._id}`}>
                    {release.artist.name}
                  </Link>
                </h2>
                <h2 className="title has-text-centered">{release.genres}</h2>
                <h2 className="title has-text-centered">
                  {release.releaseYear}
                </h2>
                <div className="has-text-centered">
                  <Spotify link={release.url} />
                </div>
                <div className="reviews">
                  {release.reviews.map((review) => {
                    return (
                      <div key={review._id}>
                        <p>{review.text}</p>
                        <p>{review.rating}</p>
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

export default ReleaseShow;
