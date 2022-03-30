import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ShowRelease from './ShowRelease';
import Navbar from './Navbar';
import Login from './auth/Login';
import NewRelease from './NewRelease';
import Register from './Register';
import ArtistIndex from './artist/ArtistIndex';
import AddArtist from './artist/AddArtist';
import ReleaseIndex from './release/ReleaseIndex';
import AddRelease from './release/AddRelease';

import '../styles/style.scss';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/releases/:id' element={<ShowRelease />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/create' element={<NewRelease />} />
      <Route path='/artists' element={<ArtistIndex />} />
      <Route path='/addartist' element={<AddArtist />} />
      <Route path='/releases' element={<ReleaseIndex />} />
      <Route path='/addrelease' element={<AddRelease />} />
    </Routes>
  </BrowserRouter>
);

export default App;
