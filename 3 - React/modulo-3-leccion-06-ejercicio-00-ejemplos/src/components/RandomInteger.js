import React from 'react';

const RandomInteger = (props) => {
  const getRandomNumber = function () {
    props.getRandom();
  };

  return (
    <>
      <span className="span">Mi número aletorio es {props.randomNumber}.</span>
      <button className="btn" type="button" onClick={getRandomNumber}>
        Dame random
      </button>
    </>
  );
};

export default RandomInteger;
