import React from 'react';

class Reset extends React.Component {
  render() {
    return (
      <>
        <button className="btn" onClick={window.location.reload()}>
          Refresh
        </button>
      </>
    );
  }
}

export default Reset;
