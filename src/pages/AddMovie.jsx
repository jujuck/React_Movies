import React from 'react';
import { useNavigate } from 'react-router-dom';

/** Import des composants */
import MovieForm from '../components/MovieForm';

const AddMovie = () => {
  const navigate = useNavigate();

  const onBackTohome = () => {
    navigate('/');
  };

  return (
    <div>
      <MovieForm buttonAction={onBackTohome} create />
    </div>
  );
};

export default AddMovie;
