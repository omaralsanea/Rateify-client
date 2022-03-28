import React from 'react';
import { createRelease } from '../api/release';
import { useNavigate } from 'react-router-dom';

function ReleaseNew() {
  const navigate = useNavigate();

  const [release, setRelease] = React.useState({
    title: '',
    description: '',
    releaseYear: '',
    img: ''
  });

  function handleChange(event) {
    setRelease({ ...release, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const getData = async () => {
      try {
        await createRelease(release);
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <form
            className='column is-half is-offset-one-quarter box'
            onSubmit={handleSubmit}
          >
            <div className='field'>
              <label className='label'>Title</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Title'
                  name='title'
                  onChange={handleChange}
                  value={release.title}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Description</label>
              <div className='control'>
                <textarea
                  className='textarea'
                  placeholder='Tasting Notes....'
                  name='description'
                  onChange={handleChange}
                  value={release.description}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Release Year</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Release Year'
                  name='releaseYear'
                  onChange={handleChange}
                  value={release.releaseYear}
                />
              </div>
            </div>
            <div className='field'>
              <label className='label'>Image</label>
              <div className='control'>
                <input
                  className='input'
                  placeholder='Image URL'
                  name='img'
                  onChange={handleChange}
                  value={release.img}
                />
              </div>
            </div>
            <div className='field'>
              <button type='submit' className='button is-warning is-fullwidth'>
                Make my Release!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReleaseNew;
