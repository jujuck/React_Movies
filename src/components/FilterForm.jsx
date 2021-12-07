import React from 'react';

const FilterForm = () => {
  return (
    <div>
      <label htmlFor="genre">
        Genre
        <select name="genre">
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="romantic">Romantic</option>
        </select>
      </label>
      <label htmlFor="max_duration">
        Durée maximum
        <input type="number" />
      </label>
      <label htmlFor="min_year">
        Année minimum
        <input type="number" min={1950} />
      </label>
    </div>
  );
};

export default FilterForm;
