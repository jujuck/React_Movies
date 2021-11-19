import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/movies')
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
    console.log(movies);
  }, []);
  return (
    <div>
      {movies.length > 0 && movies.map((movie) => <h1>{movie.title}</h1>)}
    </div>
  );
};

export default Home;
