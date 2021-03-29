import React from 'react';
import '../stylesheets/Filter.scss';

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    // props.handleFilter('name', ev.target.value);
    props.handleFilter({
      key: 'gender',
      value: ev.target.value,
    });
  };
  return (
    <div className="filter__list">
      <label className="filter__list--label" htmlFor="gender">
        Gender:
        <select className="filter__list--label filter__list--item" name="gender" id="gender" onChange={handleChange}>
          <option value="all">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonBinary">Non binary</option>
        </select>{' '}
      </label>
    </div>
  );
};

export default FilterByGender;
