import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';
import AddMovie from './pages/AddMovie';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link exact to="/">
          Home
        </Link>
        <Link exact to="/AddMovie">
          Add a movie
        </Link>
        <Link to="/single/1">single 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
