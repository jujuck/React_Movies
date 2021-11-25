import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

/** Import du CSS */
import './Single.css';

/** import des images */
import {
  action,
  drama,
  fantasy,
  sciencefiction,
  romantic,
  comedy,
} from '../assets/images';

const Single = () => {
  const [myMovie, setMyMovie] = useState({});
  const { id } = useParams();

  const getImgSrc = {
    action,
    drama,
    fantasy,
    'science-fiction': sciencefiction,
    romantic,
    comedy,
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((res) => setMyMovie(res.data[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="singleovieContainer">
      <h2>{myMovie.title}</h2>
      <h4>{myMovie.synopsis}</h4>
      <img
        src={getImgSrc[myMovie.genre]}
        alt={myMovie.title}
        className="movieImg"
      />
      <h4>
        Genre : {myMovie.genre} Durée: {myMovie.duration}
      </h4>
      <h4>Année de publication: {myMovie.year}</h4>
    </div>
  );
};

export default Single;
