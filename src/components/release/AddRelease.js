import React, { Component, useEffect } from 'react';
import { createRelease } from '../../api/release';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getAllArtists } from '../../api/artist';

const AddRelease = () => {
  const genreOptions = [
    { value: 'rock', label: 'Rock' },
    { value: 'pop', label: 'Pop' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'classical', label: 'Classical' },
    { value: 'metal', label: 'Metal' },
    { value: 'country', label: 'Country' },
    { value: 'folk', label: 'Folk' },
    { value: 'blues', label: 'Blues' },
    { value: 'r&b', label: 'R&B' },
    { value: 'jungle', label: 'Jungle' },
    { value: 'reggae', label: 'Reggae' },
    { value: 'afrobeat', label: 'Afrobeat' },
    { value: 'electronic', label: 'Electronic' },
    { value: 'hip-hop', label: 'Hip Hop' },
    { value: 'hard-rock', label: 'Hard Rock' },
    { value: 'latin', label: 'Latin' },
    { value: 'world', label: 'World' },
    { value: 'spoken-word', label: 'Spoken Word' },
    { value: 'progressive-rock', label: 'Progressive Rock' },
    { value: 'house-techno', label: 'House/Techno' }
  ];
  const [selectedGenres, setGenres] = React.useState([]);
  const navigate = useNavigate();
  const [newRelease, setNewRelease] = React.useState({
    title: '',
    artwork: '',
    genres: selectedGenres.map((x) => x.value),
    releaseYear: '',
    url: '',
    artist: ''
  });

  useEffect(() => {
    setNewRelease();
  }, []);

  // const [artistSearch, setSearchValue] = React.useState('');

  // const filterArtists = (artistSearch) => {
  //   return getAllArtists.filter((i) => {
  //     i.label.toLowerCase().includes(artistSearch.toLowerCase);
  //   });
  // };
  // function handleArtistChange(event) {
  //   setSearchValue(event.target.value);
  // }
  // const handleGenreChange = (event) => {
  //   console.log(genres);
  //   setGenres(genres);
  //   setNewRelease({ ...newRelease, genres: selectedGenres });
  //   console.log(selectedGenres);
  // };

  function handleChange(event) {
    setNewRelease({ ...newRelease, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const getData = async () => {
      try {
        await createRelease(newRelease);
        navigate('/releases');
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
              {/* <div className="control">
                <AsyncCreatableSelect loadOptions={filterArtists} />
              </div> */}
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
                <Select
                  isMulti
                  isSearchable
                  options={genreOptions}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Genres"
                  name="genres"
                  onChange={setGenres}
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
