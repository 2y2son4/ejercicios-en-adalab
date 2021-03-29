import React from 'react';
import '.././stylesheets/HalfPage.scss';

class HalfPage extends React.Component {
  render() {
    return <div className={this.props.side}> {this.props.children}</div>;
  }
}

export default HalfPage;
