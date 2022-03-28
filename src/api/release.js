import axios from 'axios';

// baseUrl is http://localhost:8000

export const getAllReleases = async () => {
  const options = {
    method: 'GET',
    url: '/api/releases'
  };

  const { data } = await axios.request(options);

  return data;
};

export const getReleaseById = async (id) => {
  const options = {
    method: 'GET',
    url: `/api/releases/${id}`
  };

  const { data } = await axios.request(options);

  return data;
};

export const createRelease = async (release) => {
  const options = {
    method: 'POST',
    url: `/api/releases`,
    data: release,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

export const createComment = async (releaseId, comment) => {
  const options = {
    method: 'POST',
    url: `/api/releases/${releaseId}/reviews`,
    data: comment,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);

  return data;
};

// ! Added deleted comment
export const deleteComment = async (releaseId, commentId) => {
  const options = {
    method: 'DELETE',
    url: `/api/releases/${releaseId}/reviews/${commentId}`,
    headers: {
      authorization: `Bearer ${window.sessionStorage.getItem('token')}`
    }
  };

  const { data } = await axios.request(options);
  console.log(data);
  return data;
};
