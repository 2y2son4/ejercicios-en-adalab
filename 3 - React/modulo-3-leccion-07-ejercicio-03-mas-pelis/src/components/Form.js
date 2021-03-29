import React, { Component } from 'react';
import Card from './Card';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
      age: '',
      genre: [],
    };
    this.handleChange = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);

    this.handleReset = this.handleReset.bind(this);
  }
  handleSubmit(ev) {
    ev.preventDefault();
  }
  handleReset() {
    this.setState({
      name: '',
      description: '',
      language: '',
      age: '',
      genre: [],
    });
  }

  handleInput(ev) {
    // teoría de objetos de JS puro. Por la sintaxis de objetos, si tienes un objeto y quieres leer una propiedad lo puedes hacer obj.propiedad u obj[propiedad].
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    console.log(target, value, name);

    this.setState({ [name]: value });
  }

  handleRadioChange(ev) {
    console.log(ev.currentTarget.value);
    this.setState({ age: ev.target.value });
  }
  handleCheckChange(ev) {
    // console.log(ev.target.value, ev.target.checked);
    console.log(this.state.genre);
    if (ev.target.checked) {
      this.setState((prevState) => {
        prevState.genre.push(ev.target.value);
        return {
          genre: [...prevState.genre],
        };
      });
    } else {
      this.setState((prevState) => {
        const genres = prevState.genre.filter((genre) => genre !== ev.target.value);
        return {
          genre: genres,
        };
      });
    }
    this.setState({ genre: ev.target.value });
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Film name"
            value={this.state.name}
            onChange={this.handleInput}
          />

          <textarea
            placeholder="Description"
            name="description"
            id=""
            cols="30"
            rows="10"
            className="textarea"
            value={this.state.description}
            onChange={this.handleInput}
          />

          <select
            name="language"
            placeholder="Choose a Language..."
            className="select"
            onChange={this.handleInput}
            value={this.state.language}
          >
            <option value="">Choose a Language...</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Albanian">Albanian</option>
            <option value="Arabic">Arabic</option>
            <option value="Armenian">Armenian</option>
            <option value="Basque">Basque</option>
            <option value="Bengali">Bengali</option>
            <option value="Bulgarian">Bulgarian</option>
            <option value="Catalan">Catalan</option>
            <option value="Cambodian">Cambodian</option>
            <option value="Chinese">Chinese (Mandarin)</option>
            <option value="Croatian">Croatian</option>
            <option value="Czech">Czech</option>
            <option value="Danish">Danish</option>
            <option value="Dutch">Dutch</option>
            <option value="English">English</option>
            <option value="Estonian">Estonian</option>
            <option value="Fiji">Fiji</option>
            <option value="Finnish">Finnish</option>
            <option value="French">French</option>
            <option value="Georgian">Georgian</option>
            <option value="German">German</option>
            <option value="Greek">Greek</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Hebrew">Hebrew</option>
            <option value="Hindi">Hindi</option>
            <option value="Hungarian">Hungarian</option>
            <option value="Icelandic">Icelandic</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Javanese">Javanese</option>
            <option value="Korean">Korean</option>
            <option value="Latin">Latin</option>
            <option value="Latvian">Latvian</option>
            <option value="Lithuanian">Lithuanian</option>
            <option value="Macedonian">Macedonian</option>
            <option value="Malay">Malay</option>
            <option value="Malayalam">Malayalam</option>
            <option value="Maltese">Maltese</option>
            <option value="Maori">Maori</option>
            <option value="Marathi">Marathi</option>
            <option value="Mongolian">Mongolian</option>
            <option value="Nepali">Nepali</option>
            <option value="Norwegian">Norwegian</option>
            <option value="Persian">Persian</option>
            <option value="Polish">Polish</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Quechua">Quechua</option>
            <option value="Romanian">Romanian</option>
            <option value="Russian">Russian</option>
            <option value="Samoan">Samoan</option>
            <option value="Serbian">Serbian</option>
            <option value="Slovak">Slovak</option>
            <option value="Slovenian">Slovenian</option>
            <option value="Spanish">Spanish</option>
            <option value="Swahili">Swahili</option>
            <option value="Swedish">Swedish </option>
            <option value="Tamil">Tamil</option>
            <option value="Tatar">Tatar</option>
            <option value="Telugu">Telugu</option>
            <option value="Thai">Thai</option>
            <option value="Tibetan">Tibetan</option>
            <option value="Tonga">Tonga</option>
            <option value="Turkish">Turkish</option>
            <option value="Ukrainian">Ukrainian</option>
            <option value="Urdu">Urdu</option>
            <option value="Uzbek">Uzbek</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Welsh">Welsh</option>
            <option value="Xhosa">Xhosa</option>
          </select>

          <div className="form__radio">
            <label htmlFor="PG">
              <input onChange={this.handleRadioChange} type="radio" name="rate" value="PG" />
              PG.
            </label>
            <label htmlFor="7">
              <input onChange={this.handleRadioChange} type="radio" name="rate" value="+7" />
              +7.
            </label>
            <label htmlFor="12">
              <input onChange={this.handleRadioChange} type="radio" name="rate" value="+12" />
              +12.
            </label>
            <label htmlFor="16">
              <input onChange={this.handleRadioChange} type="radio" name="rate" value="+16" />
              +16.
            </label>
            <label htmlFor="18">
              <input onChange={this.handleRadioChange} type="radio" name="rate" value="+18" />
              +18.
            </label>
          </div>

          <div className="form__checkbox">
            <label htmlFor="comedy">
              <input
                type="checkbox"
                id="comedy"
                name="genre"
                value="Comedy"
                onChange={this.handleCheckChange}
                checked={this.state.genre.indexOf('Comedy') >= 0}
              />
              Comedy.
            </label>
            <label htmlFor="drama">
              <input
                type="checkbox"
                id="drama"
                name="genre"
                value="Drama"
                onChange={this.handleCheckChange}
                checked={this.state.genre.indexOf('Drama') >= 0}
              />
              Drama.
            </label>
            <label htmlFor="fantasy">
              <input
                type="checkbox"
                id="fantasy"
                name="genre"
                value="Fantasy"
                onChange={this.handleCheckChange}
                checked={this.state.genre.indexOf('Fantasy') >= 0}
              />
              Fantasy.
            </label>
            <label htmlFor="action">
              <input
                type="checkbox"
                id="action"
                name="genre"
                value="Action"
                onChange={this.handleCheckChange}
                checked={this.state.genre.indexOf('Action') >= 0}
              />
              Action..
            </label>
            <label htmlFor="familyfriendly">
              <input
                type="checkbox"
                id="familyfriendly"
                name="genre"
                value="Family flick"
                onChange={this.handleCheckChange}
                checked={this.state.genre.indexOf('Family flick') >= 0}
              />
              Family flick.
            </label>
            <label htmlFor="horror">
              <input
                type="checkbox"
                id="horror"
                name="genre"
                value="Horror"
                onChange={this.handleCheckChange}
                checked={this.state.genre.indexOf('Horror') >= 0}
              />
              Terror.
            </label>
          </div>
          <button className="form__btn" onClick={this.handleReset}>
            Reset
          </button>
        </form>

        <Card
          name={this.state.name}
          description={this.state.description}
          language={this.state.language}
          age={this.state.age}
          genre={this.state.genre}
        />
      </>
    );
  }
}

export default Form;
