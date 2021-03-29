import React from 'react';

const MorePresents = (props) => {
  const getMorePresents = function () {
    props.getPresent();
  };

  return (
    <button className="btn" type="button" onClick={getMorePresents}>
      Dame regalos
    </button>
  );
};

export default MorePresents;
