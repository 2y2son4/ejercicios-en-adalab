import React from 'react';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <div className="form inputFile" onSubmit={this.handleSubmit}>
        <label className="inputFile__label">
          Upload file:
          <input className="inputFile__input" type="file" ref={this.fileInput} />
        </label>
        <br />
        <button className="inputFile__btn" type="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default FileInput;
