import React from 'react';
import { useNavigate } from 'react-router-dom';
/** Import du CSS */
import './Card.css';

/** import des images */
import {
  action,
  drama,
  fantasy,
  sciencefiction,
  romantic,
  comedy,
} from '../assets/images';

const Card = ({ movie }) => {
  const navigate = useNavigate();
  const getImgSrc = {
    action,
    drama,
    fantasy,
    'science-fiction': sciencefiction,
    romantic,
    comedy,
  };

  const goToMoviePage = (id) => {
    navigate(`/single/${id}`);
  };

  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <img
        src={getImgSrc[movie.genre]}
        alt={movie.title}
        className="movieImg"
      />
      <button
        type="submit"
        onClick={() => goToMoviePage(movie.id)}
        className="movieBtn"
      >
        En savoir plus
      </button>
    </div>
  );
};

export default Card;
