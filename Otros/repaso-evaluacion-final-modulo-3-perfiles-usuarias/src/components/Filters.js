import React from 'react';
import FilterByName from './FilterByName';
import FilterByGender from './FilterByGender';
import FilterByCities from './FilterByCities';
import '../stylesheets/Filter.scss';

const Filters = (props) => {
  const { handleFilter, cities } = props;
  return (
    <section className="filter">
      <h2 className="filter__title">- Search -</h2>
      <form className="filter__list">
        <FilterByName handleFilter={handleFilter} />
        <FilterByGender handleFilter={handleFilter} />
        <FilterByCities handleFilter={handleFilter} cities={cities} />
      </form>
    </section>
  );
};

export default Filters;
