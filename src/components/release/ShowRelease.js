import React from 'react';
import { useParams } from 'react-router-dom';
import {
  getReleaseById,
  createComment,
  deleteComment
} from '../../api/release';
import { getLoggedInUserId } from '../../lib/auth';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Spotify from 'react-spotify-embed';

const ReleaseShow = () => {
  const { id } = useParams();
  console.log(useParams());
  const [release, setRelease] = React.useState(null);
  const [ratingValue, setRating] = React.useState(null);
  const [textValue, setTextValue] = React.useState('');
  const reviewOptions = [
    { value: 1, label: '⭐️' },
    { value: 2, label: '⭐️ ⭐️' },
    { value: 3, label: '⭐️ ⭐️ ⭐️' },
    { value: 4, label: '⭐️ ⭐️ ⭐️ ⭐️' },
    { value: 5, label: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️' }
  ];
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

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };
  const handleCommentDelete = async (commentId) => {
    const data = await deleteComment(id, commentId);
    setRelease(data);
  };
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const data = await createComment(id, {
      text: textValue,
      rating: ratingValue.value
    });
    console.log(data);
    setTextValue('');
    setRating('');
    setRelease(data);
  };
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
                  {release.genres.join(', ')}
                </h2>
                <h2 className="title has-text-centered has-text-white is-size-5">
                  {release.releaseYear}
                </h2>
                <div className="has-text-centered">
                  <Spotify link={release.url} />
                </div>
                <div className="reviews">
                  {getLoggedInUserId() && (
                    <form onSubmit={handleReviewSubmit}>
                      <div className="form">
                        <label htmlFor="review" className="label">
                          Post a new review
                        </label>
                        <div className="control" id="reviews">
                          <textarea
                            type="text"
                            className="input"
                            name="text"
                            value={textValue}
                            onChange={handleTextChange}
                          ></textarea>
                          <Select
                            options={reviewOptions}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            name="rating"
                            onChange={setRating}
                            placeholder="Rating"
                          ></Select>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="button is-success"
                        value="Submit"
                      />
                    </form>
                  )}
                  {release.reviews.map((review) => {
                    return (
                      <div key={review._id}>
                        <p className="has-text-white">{review.text}</p>
                        <p className="has-text-white">{review.rating}</p>
                        {getLoggedInUserId() === review.createdBy && (
                          <button
                            type="button"
                            className="button is-danger"
                            onClick={() => handleCommentDelete(review._id)}
                          >
                            Delete
                          </button>
                        )}
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
