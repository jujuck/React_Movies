import React from 'react';
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
    </div>
  );
};

export default Card;
