import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';

/** Import de composant */
import Message from '../components/Message';

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
  const [confirmation, setConfirmation] = useState(false);
  const [redirection, setRedirection] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const deleteOneMovie = () => {
    axios.delete(`http://localhost:5000/movies/${id}`).then(() => {
      setTimeout(() => navigate('/'), 3000);
    });
  };

  const onDeleteConfirmation = (validation) => {
    if (validation) {
      deleteOneMovie();
    }
    setConfirmation(false);
    setRedirection(true);
  };

  return (
    <div id="singleMovie" className="singleovieContainer">
      <Message
        title="Suppression d'un film"
        description={`Confirmez vous la suppression du film ${myMovie.title}`}
        buttonAction={onDeleteConfirmation}
        confirmation={confirmation}
      />
      <Message
        title="Suppression d'un film"
        description={`Suppression du film ${myMovie.title} en cours. Vous allez être redirigé`}
        confirmation={redirection}
      />
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
      <button
        type="submit"
        onClick={() => setConfirmation(true)}
        className="movieBtn"
      >
        Supprimer
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default Single;
