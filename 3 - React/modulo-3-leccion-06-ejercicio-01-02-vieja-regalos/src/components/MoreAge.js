import React from 'react';

const MoreAge = (props) => {
  const getMoreAge = function () {
    props.getYear();
  };

  return (
    <button className="btn" type="button" onClick={getMoreAge}>
      Hazme viejita
    </button>
  );
};

export default MoreAge;
