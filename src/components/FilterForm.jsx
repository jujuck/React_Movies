import React from 'react';

/** Import du CSS */
import './FilterForm.css';

const FilterForm = ({
  genre,
  maxduration,
  minyear,
  onSetGenre,
  onSetMinYear,
  onSetMaxDuration,
}) => {
  return (
    <div className="filterForm">
      <h4>Améliorer votre recherche</h4>
      <label htmlFor="genre">
        Genre
        <select
          name="genre"
          value={genre}
          onChange={(event) => onSetGenre(event.target.value)}
        >
          <option value="">Non défini</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="romantic">Romantic</option>
        </select>
      </label>
      <label htmlFor="maxduration">
        Durée maximum
        <input
          type="number"
          value={maxduration}
          onChange={(event) => onSetMaxDuration(event.target.value)}
        />
      </label>
      <label htmlFor="min_year">
        Année minimum
        <input
          type="number"
          min={1950}
          value={minyear}
          onChange={(event) => onSetMinYear(event.target.value)}
        />
      </label>
    </div>
  );
};

export default FilterForm;
