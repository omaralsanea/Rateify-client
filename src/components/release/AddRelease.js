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
    genres: [],
    releaseYear: '',
    url: '',
    artist: ''
  });
  const [artistsList, setList] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllArtists();
        const transformedData = data.map(({ _id, name }) => ({
          value: _id,
          label: name
        }));
        setList(transformedData);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);
  console.log(artistsList);
  const [artist, setArtist] = React.useState('');

  function handleChange(event) {
    setNewRelease({
      ...newRelease,
      [event.target.name]: event.target.value,
      genres: selectedGenres.map((x) => x.value),
      artist: artist.value
    });
    console.log(newRelease.artist);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const getData = async () => {
      try {
        await createRelease(newRelease);
        console.log(newRelease);
        navigate('/releases');
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }

  return (
    <section className="is-fullheight-with-navbar has-background-dark form-page">
      <div className="container pt-6">
        <div className="columns pt-6">
          <form
            className="column is-half is-offset-one-quarter box has-background-grey"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label has-text-white has-text-centered">
                Artist
              </label>
              <div className="control">
                <Select
                  isSearchable
                  options={artistsList}
                  className="basic-multi-select has-background-grey-lighter"
                  classNamePrefix="select"
                  placeholder=""
                  name="genres"
                  onChange={setArtist}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white has-text-centered">
                Release Title
              </label>
              <div className="control">
                <input
                  className="input has-background-grey-lighter"
                  //placeholder="Release Title"
                  name="title"
                  onChange={handleChange}
                  value={newRelease.title}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white has-text-centered">
                Genres
              </label>
              <div className="control">
                <Select
                  isMulti
                  isSearchable
                  options={genreOptions}
                  className="basic-multi-select has-background-grey-lighter"
                  classNamePrefix="select"
                  placeholder=""
                  name="genres"
                  onChange={setGenres}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white has-text-centered">
                Release Year
              </label>
              <div className="control">
                <input
                  className="input has-background-grey-lighter"
                  // placeholder="Release Year"
                  name="releaseYear"
                  onChange={handleChange}
                  value={newRelease.releaseYear}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white has-text-centered">
                Release Image URL
              </label>
              <div className="control">
                <input
                  className="input has-background-grey-lighter"
                  // placeholder="Release Image URL"
                  name="artwork"
                  onChange={handleChange}
                  value={newRelease.artwork}
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-white has-text-centered">
                Spotify Link
              </label>
              <div className="control">
                <input
                  className="input has-background-grey-lighter"
                  // placeholder="Spotify Link"
                  name="url"
                  onChange={handleChange}
                  value={newRelease.url}
                />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-fullwidth is-success">
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
