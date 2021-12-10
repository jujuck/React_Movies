import axios from 'axios';

const fetchAllMovies = async (genre, maxduration, minyear) => {
  let url = 'http://localhost:5000/movies?';
  if (genre !== '') url += `genre=${genre}&`;
  if (maxduration !== 0) url += `max_duration=${maxduration}&`;
  if (minyear !== 0) url += `min_year=${minyear}`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchAllMovies;
