import React, { useState } from 'react';
import axios from 'axios';

/** Import du CSS */
import './MovieForm.css';

const MovieForm = ({ myMovie = {}, buttonAction, create = false }) => {
  const [movie, setMovie] = useState(myMovie);
  const [message, setMessage] = useState(false);

  /**
   * Mise à jour du state du film
   * @param {*} value
   * @param {*} type
   */
  const updateMovie = (value, type) => {
    const newMovie = { ...movie };
    if (type === 'year' || type === 'duration') {
      newMovie[type] = parseInt(value, 10);
    } else {
      newMovie[type] = value;
    }
    setMovie(newMovie);
  };

  /**
   * Vérification de la présence des champs
   * @returns
   */
  const checkValidity = () => {
    const { title, genre, synopsis, year, duration } = movie;
    return title && genre && synopsis && year && duration;
  };

  /**
   * Mise à jour du film en BDD
   * create = false (Possible si modal depuis single)
   */
  const updateMovieInBDD = () => {
    axios
      .put(`http://localhost:5000/movies/${movie.id}`, { ...movie })
      .then(() => buttonAction(movie))
      .catch((err) => console.error(err));
  };

  /**
   * Création d'un film en BDD
   * Create = true (Page add Movie)
   */
  const createMovieInBDD = () => {
    const validity = checkValidity();
    if (validity) {
      axios
        .post(`http://localhost:5000/movies/`, { ...movie })
        .then(() => buttonAction())
        .catch((err) => console.error(err));
    } else {
      setMessage(true);
    }
  };

  return (
    <div className="movieForm">
      <h2>Modification du film</h2>
      {message && <h4>L ensemble des champs doivent être renseigné</h4>}
      <p>
        <label htmlFor="title">
          Title
          <input
            type="text"
            value={movie.title || null}
            onChange={(event) => updateMovie(event.target.value, 'title')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="synopsis">
          Synopsis
          <textarea
            value={movie.synopsis || null}
            onChange={(event) => updateMovie(event.target.value, 'synopsis')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="genre">
          Genre
          <input
            type="text"
            value={movie.genre || null}
            onChange={(event) => updateMovie(event.target.value, 'genre')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="year">
          Année
          <input
            type="tnumber"
            value={movie.year || null}
            onChange={(event) => updateMovie(event.target.value, 'year')}
          />
        </label>
      </p>
      <p>
        <label htmlFor="duration">
          Durée
          <input
            type="number"
            value={movie.duration || null}
            onChange={(event) => updateMovie(event.target.value, 'duration')}
          />
        </label>
      </p>
      {/** Si create, bouton de création, sinon update */}
      {create ? (
        <button
          className="popupBtn"
          type="submit"
          onClick={() => createMovieInBDD()}
        >
          Ajouter
        </button>
      ) : (
        <button
          className="popupBtn"
          type="submit"
          onClick={() => updateMovieInBDD()}
        >
          Modifier
        </button>
      )}
      <button className="popupBtn" type="submit" onClick={() => buttonAction()}>
        Annuler
      </button>
    </div>
  );
};

export default MovieForm;
