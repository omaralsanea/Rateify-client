import axios from 'axios';

// baseUrl is http://localhost:8000

export const getAllArtists = async () => {
  const options = {
    method: 'GET',
    url: '/api/artists'
  };

  const { data } = await axios.request(options);
  console.log('GETALLARTIST DATA IS', data);
  return data;
};

export const getArtistById = async (id) => {
  const options = {
    method: 'GET',
    url: `/api/artists/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};

export const createArtist = async (artist) => {
  const options = {
    method: 'POST',
    url: `/api/artists`,
    data: artist,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const createComment = async (artistId, comment) => {
  const options = {
    method: 'POST',
    url: `/api/artists/${artistId}/comments`,
    data: comment,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

// ! Added deleted comment
export const deleteComment = async (artistId, commentId) => {
  const options = {
    method: 'DELETE',
    url: `/api/artists/${artistId}/comments/${commentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  console.log(data);
  return data;
};
