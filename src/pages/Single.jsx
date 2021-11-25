import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Single = () => {
  const [myMovie, setMyMovie] = useState([]);
  const { id } = useParams();
  console.log('My Single Page');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/movies/${id}`)
      .then((res) => setMyMovie(res.data))
      .catch((err) => console.error(err));
  }, []);
  return <div>{myMovie[0].title}</div>;
};

export default Single;
