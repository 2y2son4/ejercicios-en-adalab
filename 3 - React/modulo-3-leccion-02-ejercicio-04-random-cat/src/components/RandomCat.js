import React from 'react';

class RandomCat extends React.Component {
  debugger;
  render() {
    let width;
    if (this.props.width === undefined) {
      width = '400';
    } else {
      width = this.props.width;
    }

    let height;
    if (this.props.height === undefined) {
      height = '400';
    } else {
      height = this.props.height;
    }
    // const height = this.props.height === undefined ? '200' : this.props.height;
    //const height = this.props.height ? this.props.height : '200';
    // const height = this.props.height || '200';

    return (
      <a href="https://www.fillmurray.com">
        <img src={`https://www.fillmurray.com/${width}/${this.props.height || '200'}`} alt="Random Bill" />
      </a>
    );
  }
}

// RandomCat.defaultProps = {
//   width: '400',
//   height: '200',
// };

export default RandomCat;
