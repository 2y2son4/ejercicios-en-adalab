import React, { Component } from 'react';
import '../stylesheets/Filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <h2 className="filter__title">Search:</h2>
        <div className="filter__list">
          <label className="filter__list--label" htmlFor="name">
            Name
            <input className="filter__list--input" type="text" name="name" id="" />
          </label>
          <label className="filter__list--label" htmlFor="city">
            City:
            <input className="filter__list--item" type="checkbox" name="city" id="" value="" />
          </label>
          <label className="filter__list--label" htmlFor="gender">
            {' '}
            Gender:
            <select className="filter__list--label filter__list--item" name="gender" id="gender">
              <option value="all">All</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="no-binary">Non binary</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

export default Filter;
