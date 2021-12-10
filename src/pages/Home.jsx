import React, { useState, useEffect } from 'react';
import fetchAllMovies from '../services/movies';

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
  const [myTimeOut, setMyTimeOut] = useState();

  /**
   * Fetch des données
   */
  const getData = () => {
    // Préparation de l'Url
    fetchAllMovies(genre, maxduration, minyear)
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.error(err));
  };

  /**
   * Gestion des inputs: on attends 0.3 sec avant la requete pour eviter le multi fetching sur saisie user
   */
  useEffect(() => {
    clearTimeout(myTimeOut);
    const id = setTimeout(() => {
      getData();
    }, 300);
    setMyTimeOut(id);
  }, [genre, maxduration, minyear]);

  /** Mise à jour du state MinYear */
  const onSetMinYear = (value) => {
    setMinYear(value);
  };

  /** Mise à jour du state MaxDuration */
  const onSetMaxDuration = (value) => {
    setMaxDuration(value);
  };

  /** Mise à jour du state Genrer */
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
