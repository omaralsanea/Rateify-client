import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
// ! Import getloggedinUserid
import { getLoggedInUserId } from '../lib/auth';

// ! Add deleting a comment
import { getReleaseById, createComment, deleteComment } from '../api/release';

const ShowRelease = () => {
  const { id } = useParams();
  const [release, setRelease] = React.useState(null);
  const [commentValue, setCommentValue] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      const release = await getReleaseById(id);
      setRelease(release);
    };

    getData();
  }, []);

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const data = await createComment(id, { text: commentValue, rating: 5 });
    setCommentValue('');
    setRelease(data);
  };

  // ! Handle deleting a comment
  const handleCommentDelete = async (commentId) => {
    // ! Passing through the release Id and the commend Id
    const data = await deleteComment(id, commentId);
    setRelease(data);
  };

  if (!release) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container pt-6'>
      <div className='columns'>
        <div className='column is-half'>
          <figure className='image '>
            <img src={release.img} alt={release.title} />
          </figure>
        </div>
        <div className='column is-half'>
          <div className='card p-6'>
            <h2 className='title'>{release.title}</h2>
            <p>{release.description}</p>
            <p>Released in {release.releaseYear}</p>
          </div>

          {/* { // ! Now you can only see form to post a comment if you're logged in! } */}
          {getLoggedInUserId() && (
            <form onSubmit={handleCommentSubmit}>
              <div className='form'>
                <label htmlFor='comment' className='label'>
                  Post a new comment
                </label>
                <div className='control'>
                  <textarea
                    type='text'
                    className='input'
                    value={commentValue}
                    onChange={handleCommentChange}
                  />
                </div>
              </div>
              <input type='submit' className='button is-info' value='Submit' />
            </form>
          )}

          <div>
            {release.comments.map((comment) => {
              console.log(comment.text, getLoggedInUserId(), comment.createdBy);
              return (
                <div key={comment._id}>
                  <p>{comment.text}</p>
                  <p>{comment.rating}</p>
                  {/* // ! Button for deleting a comment */}
                  {/* // ! Only show this button for deleting if the logged in user id matches comment user id */}
                  {getLoggedInUserId() === comment.createdBy && (
                    <button
                      type='button'
                      className='button is-danger'
                      // ! Trick to pass through the comment ID to delete
                      onClick={() => handleCommentDelete(comment._id)}
                    >
                      Delete ☠️
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowRelease;
