import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ShowRelease from './release/ShowRelease';
import ShowArtist from './artist/ShowArtist';
import Navbar from './Navbar';
import Login from './auth/Login';
import Register from './Register';
import ArtistIndex from './artist/ArtistIndex';
import AddArtist from './artist/AddArtist';
import ReleaseIndex from './release/ReleaseIndex';
import AddRelease from './release/AddRelease';
import About from './About';

import '../styles/style.scss';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/releases/:id' element={<ShowRelease />} />
      <Route path='/artists/:id' element={<ShowArtist />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/artists' element={<ArtistIndex />} />
      <Route path='/addartist' element={<AddArtist />} />
      <Route path='/releases' element={<ReleaseIndex />} />
      <Route path='/addrelease' element={<AddRelease />} />
    </Routes>
  </BrowserRouter>
);

export default App;
