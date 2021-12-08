import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Import du CSS */
import './Home.css';

/** Import des composants */
import Card from '../components/Card';
import FilterForm from '../components/FilterForm';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState('');
  const [maxduration, setMaxDuration] = useState(0);
  const [minyear, setMinYear] = useState(0);

  useEffect(() => {
    let url = 'http://localhost:5000/movies?';
    if (genre !== '') url += `genre=${genre}&`;
    if (maxduration !== 0) url += `max_duration=${maxduration}&`;
    if (minyear !== 0) url += `min_year=${minyear}`;
    axios
      .get(url)
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, [genre, maxduration, minyear]);

  const onSetMinYear = (value) => {
    setMinYear(value);
  };

  const onSetMaxDuration = (value) => {
    setMaxDuration(value);
  };

  const onSetGenre = (value) => {
    setGenre(value);
  };
  return (
    <div>
      <FilterForm
        genre={genre}
        max_duration={maxduration}
        min_year={minyear}
        onSetGenre={onSetGenre}
        onSetMaxDuration={onSetMaxDuration}
        onSetMinYear={onSetMinYear}
      />
      <div className="home">
        {movies.length > 0 && movies.map((movie) => <Card movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
