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
    <section className="section has-background-dark show-page">
      <div className="container">
        {!release ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div className="columns">
              <div className="column is-half">
                <figure className="image release-art">
                  <img src={release.artwork} alt={release.title} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title has-text-centered has-text-white">
                  {release.title}
                </h4>
                <h3 className="title has-text-centered has-text-white is-size-4">
                  <Link to={`/artists/${release.artist._id}`}>
                    {release.artist.name}
                  </Link>
                </h3>
                <h2 className="title has-text-centered has-text-white is-size-5">
                  {release.genres}
                </h2>
                <h2 className="title has-text-centered has-text-white is-size-5">
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
