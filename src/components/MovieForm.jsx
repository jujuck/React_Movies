import React, { useState } from 'react';
import axios from 'axios';

/** Import du CSS */
import './MovieForm.css';

const MovieForm = ({ myMovie, buttonAction }) => {
  const [movie, setMovie] = useState(myMovie);

  const updateMovie = (value, type) => {
    const newMovie = { ...movie };
    newMovie[type] = value;
    setMovie(newMovie);
  };

  const updateMovieInBDD = () => {
    axios
      .put(`http://localhost:5000/movies/${movie.id}`, { ...movie })
      .then(() => buttonAction(movie))
      .catch((err) => console.error(err));
  };

  return (
    <div className="movieForm">
      <h2>Modification du film</h2>
      <p>
        <label htmlFor="title">
          Title
          <input
            type="text"
            value={movie.title}
            onChange={(event) => updateMovie(event.target.value, 'title')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="synopsis">
          Synopsis
          <textarea
            value={movie.synopsis}
            onChange={(event) => updateMovie(event.target.value, 'synopsis')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="genre">
          Genre
          <input
            type="text"
            value={movie.genre}
            onChange={(event) => updateMovie(event.target.value, 'genre')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="year">
          Année
          <input
            type="tnumber"
            value={movie.year}
            onChange={(event) => updateMovie(event.target.value, 'year')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="duration">
          Durée
          <input
            type="number"
            value={movie.duration}
            onChange={(event) => updateMovie(event.target.value, 'duration')}
          />
        </label>
      </p>
      <button
        className="popupBtn"
        type="submit"
        onClick={() => updateMovieInBDD()}
      >
        Valider
      </button>
      <button className="popupBtn" type="submit" onClick={() => buttonAction()}>
        Annuler
      </button>
    </div>
  );
};

export default MovieForm;
