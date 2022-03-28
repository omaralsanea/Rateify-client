import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import ShowRelease from './ShowRelease';
import Navbar from './Navbar';
import Login from './auth/Login';
import NewRelease from './NewRelease';
import Register from './Register';
import ArtistIndex from './ArtistIndex';

import '../styles/style.scss';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/release/:id' element={<ShowRelease />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/create' element={<NewRelease />} />
      <Route path='/artists' element={<ArtistIndex />} />
    </Routes>
  </BrowserRouter>
);

export default App;
