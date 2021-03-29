import React from 'react';
import CityImage from './CityImage';

const Destiny = () => {
  const onChangeListener = (ev) => {
    ev.target.value !== '' ? alert(`Tu destino es viajar a ${ev.target.value}`) : alert('Selecciona un destino');
  };
  return (
    <>
      <select className="select" name="destiny" id="3" onChange={onChangeListener}>
        <option value="">Selecciona tu destino...</option>
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sydney">Sydney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston </option>
        <option value="Tokio">Tokio </option>
      </select>
      <CityImage city="Praga" />
    </>
  );
};

export default Destiny;
