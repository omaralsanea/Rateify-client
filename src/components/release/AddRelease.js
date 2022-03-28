import React from 'react';
import { createRelease } from '../../api/release';
import { useNavigate } from 'react-router-dom';

const AddRelease = () => {
  const navigate = useNavigate();

  const [newRelease, setNewRelease] = React.useState({
    title: '',
    artwork: '',
    genres: [],
    releaseYear: '',
    url: '',
    artist: ''
  });

  function handleChange(event) {
    setNewRelease({ ...newRelease, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const getData = async () => {
      try {
        await createRelease(newRelease);
        navigate('/release');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <form
            className="column is-half is-offset-one-quarter box"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Artist</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Artist"
                  name="artist"
                  onChange={handleChange}
                  value={newRelease.artist}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Release Title</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Release Title"
                  name="title"
                  onChange={handleChange}
                  value={newRelease.title}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Genres</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Genres"
                  name="genres"
                  onChange={handleChange}
                  value={newRelease.genres}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Release Year</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Release Year"
                  name="releaseYear"
                  onChange={handleChange}
                  value={newRelease.releaseYear}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Release Image URL</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Release Image URL"
                  name="artwork"
                  onChange={handleChange}
                  value={newRelease.artwork}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Spotify Link</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Spotify Link"
                  name="url"
                  onChange={handleChange}
                  value={newRelease.url}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-warning">
                Submit Release
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddRelease;
