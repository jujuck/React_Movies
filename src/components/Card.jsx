import React from 'react';
import { Link } from 'react-router-dom';
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
  const getImgSrc = {
    action,
    drama,
    fantasy,
    'science-fiction': sciencefiction,
    romantic,
    comedy,
  };

  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <img
        src={getImgSrc[movie.genre]}
        alt={movie.title}
        className="movieImg"
      />
      <Link to={`/single/${movie.id}`}>
        <button type="submit" className="movieBtn">
          En savoir plus
        </button>
      </Link>
    </div>
  );
};

export default Card;
