import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Import du CSS */
import './Home.css';

/** Import des composants */
import Card from '../components/Card';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/movies')
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="home">
      {movies.length > 0 && movies.map((movie) => <Card movie={movie} />)}
    </div>
  );
};

export default Home;
