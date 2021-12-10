import React, { useEffect, useState } from 'react';
import fetchAllMovies from '../services/movies';

/** Import des composants associés */
import Card from './Card';

const Suggestion = ({ genre = null, id }) => {
  const [moviesByGenre, setMoviesByGenre] = useState();
  const [num, setNum] = useState(0);

  const getSuggestion = (data) => {
    setNum(0);
    const suggest = data.map((movie) => {
      if (movie.id !== id) {
        setNum(num + 1);
        return <Card movie={movie} />;
      }
      return '';
    });
    setMoviesByGenre(suggest);
  };
  useEffect(() => {
    if (genre) {
      fetchAllMovies(genre)
        .then((data) => getSuggestion(data))
        .catch((err) => console.error(err));
    }
  }, [genre, id]);

  return <div>{moviesByGenre}</div>;
};

export default Suggestion;
