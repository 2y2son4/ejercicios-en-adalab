// Form.js
import React from 'react';
import InputText from './Input';

const handleFormInput = (data) => {
  console.log(data.name, data.value);
};

const Form = () => {
  return (
    <form>
      <InputText
        id="name"
        label="Escribe tu nombre:"
        name="name"
        placeText="Rita la Cantaora"
        handleInput={handleFormInput}
      />
      <InputText
        id="email"
        label="Escribe tu email:"
        name="email"
        placeText="ritalacantaora@casapatas.es"
        handleInput={handleFormInput}
      />
      <InputText
        id="city"
        label="Escribe tu ciudad:"
        name="city"
        placeText="Jerez de la Frontera"
        handleInput={handleFormInput}
      />
    </form>
  );
};

export default Form;
