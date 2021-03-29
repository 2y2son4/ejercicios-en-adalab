import React from 'react';

class MediaCard extends React.Component {
  render() {
    let heartClass;
    if (this.props.fas === true) {
      heartClass = 'fas fa-heart icon';
    } else {
      heartClass = 'far fa-heart icon';
    }
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-container">
            <div className="header-container">
              <img className="avatar" src={this.props.avatar} alt="avatar" />
              <h1 className="name-title">{this.props.name}</h1>
              <p className="date">{this.props.date}</p>
            </div>
            <p className="main-paragraph">{this.props.mockText}</p>
            <div className="footer-container">
              <p className="more">Leer más...</p>
              <p className="likes">
                {/* {' '} */}
                {this.props.likes} <i className={heartClass}></i>
              </p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default MediaCard;
