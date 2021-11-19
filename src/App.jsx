import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** Import des pages */
import Home from './pages/Home';
import Single from './pages/Single';
import AddMovie from './pages/AddMovie';

/** Import des composants */
import Menu from './components/Menu';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/single/:id" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
