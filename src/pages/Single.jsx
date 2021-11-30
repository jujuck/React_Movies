import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';

/** Import de composant */
import Message from '../components/Message';
import MovieForm from '../components/MovieForm';

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

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '15px',
    textAlign: 'center',
    width: '60%',
  },
};
const Single = () => {
  const [myMovie, setMyMovie] = useState({});
  const [confirmation, setConfirmation] = useState(false);
  const [redirection, setRedirection] = useState(false);
  const [modification, setModification] = useState(false);
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
      setRedirection(true);
    }
    setConfirmation(false);
  };

  const onCancelModification = (movie) => {
    if (movie) setMyMovie(movie);
    setModification(false);
  };

  return (
    <div id="singleMovie" className="singleovieContainer">
      <Modal isOpen={confirmation} style={customStyles}>
        <Message
          title="Suppression d'un film"
          description={`Confirmez vous la suppression du film ${myMovie.title}`}
          buttonAction={onDeleteConfirmation}
        />
      </Modal>
      <Modal isOpen={redirection} style={customStyles}>
        <Message
          title="Suppression d'un film"
          description={`Suppression du film ${myMovie.title} en cours. Vous allez être redirigé`}
        />
      </Modal>
      <Modal isOpen={modification} style={customStyles}>
        <MovieForm myMovie={myMovie} buttonAction={onCancelModification} />
      </Modal>
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
      <button
        type="submit"
        onClick={() => setModification(true)}
        className="movieBtn"
      >
        Modifier
        <BiEditAlt />
      </button>
    </div>
  );
};

export default Single;
