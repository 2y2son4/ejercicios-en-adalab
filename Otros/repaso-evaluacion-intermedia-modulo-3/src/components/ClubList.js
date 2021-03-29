import React from 'react';
import Club from './Club';

class ClubList extends React.Component {
  render() {
    // recorrer el array.
    const result = this.props.clubs.map((clubItem, i) => {
      return (
        <li className="itemLi" id={i + 1} key={i}>
          <Club clubProp={clubItem} />
        </li>
      );
    });
    return <ul>{result}</ul>;
  }
}

export default ClubList;
