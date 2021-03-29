import React from 'react';
import '../stylesheets/Filter.scss';

const FilterByCities = (props) => {
  // console.log(props.cities);

  const handleChange = (ev) => {
    props.handleFilter({
      key: 'location',
      value: ev.target.value,
    });
  };
  const citiesList = props.cities.map((city, i) => {
    return (
      <label className="filter__list--label-city" key={i} htmlFor="cities">
        <input type="checkbox" name="location" value={city} id={i} onChange={handleChange} /> {city}.
      </label>
    );
  });

  return (
    <label className="filter__list--cities filter__list--label" htmlFor="cities">
      Cities:
      {citiesList}
    </label>
  );
};

export default FilterByCities;
