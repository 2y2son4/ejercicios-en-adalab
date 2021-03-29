import React, { Component } from 'react';
import Card from './Card';
import FileInput from './FileInput';
// import Languages2 from './Languages2';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };
    // this.handleChange = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }
  //   handleSubmit(ev) {
  //     ev.preventDefault();
  //   }
  handleChangeName(ev) {
    this.setState({ name: ev.target.value });
  }
  handleChangeDescription(ev) {
    this.setState({ description: ev.target.value });
  }
  handleChangeLanguage(ev) {
    this.setState({ language: ev.target.value });
  }
  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder="Film name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <textarea
            placeholder="Description"
            name=""
            id=""
            cols="30"
            rows="10"
            className="textarea"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          <select
            placeholder="Choose a Language..."
            className="select"
            onChange={this.handleChangeLanguage}
            value={this.state.language}
          >
            <option value="">Choose a Language...</option>
            <option value="AF">Afrikaans</option>
            <option value="SQ">Albanian</option>
            <option value="AR">Arabic</option>
            <option value="HY">Armenian</option>
            <option value="EU">Basque</option>
            <option value="BN">Bengali</option>
            <option value="BG">Bulgarian</option>
            <option value="CA">Catalan</option>
            <option value="KM">Cambodian</option>
            <option value="ZH">Chinese (Mandarin)</option>
            <option value="HR">Croatian</option>
            <option value="CS">Czech</option>
            <option value="DA">Danish</option>
            <option value="NL">Dutch</option>
            <option value="EN">English</option>
            <option value="ET">Estonian</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finnish</option>
            <option value="FR">French</option>
            <option value="KA">Georgian</option>
            <option value="DE">German</option>
            <option value="EL">Greek</option>
            <option value="GU">Gujarati</option>
            <option value="HE">Hebrew</option>
            <option value="HI">Hindi</option>
            <option value="HU">Hungarian</option>
            <option value="IS">Icelandic</option>
            <option value="ID">Indonesian</option>
            <option value="GA">Irish</option>
            <option value="IT">Italian</option>
            <option value="JA">Japanese</option>
            <option value="JW">Javanese</option>
            <option value="KO">Korean</option>
            <option value="LA">Latin</option>
            <option value="LV">Latvian</option>
            <option value="LT">Lithuanian</option>
            <option value="MK">Macedonian</option>
            <option value="MS">Malay</option>
            <option value="ML">Malayalam</option>
            <option value="MT">Maltese</option>
            <option value="MI">Maori</option>
            <option value="MR">Marathi</option>
            <option value="MN">Mongolian</option>
            <option value="NE">Nepali</option>
            <option value="NO">Norwegian</option>
            <option value="FA">Persian</option>
            <option value="PL">Polish</option>
            <option value="PT">Portuguese</option>
            <option value="PA">Punjabi</option>
            <option value="QU">Quechua</option>
            <option value="RO">Romanian</option>
            <option value="RU">Russian</option>
            <option value="SM">Samoan</option>
            <option value="SR">Serbian</option>
            <option value="SK">Slovak</option>
            <option value="SL">Slovenian</option>
            <option value="ES">Spanish</option>
            <option value="SW">Swahili</option>
            <option value="SV">Swedish </option>
            <option value="TA">Tamil</option>
            <option value="TT">Tatar</option>
            <option value="TE">Telugu</option>
            <option value="TH">Thai</option>
            <option value="BO">Tibetan</option>
            <option value="TO">Tonga</option>
            <option value="TR">Turkish</option>
            <option value="UK">Ukrainian</option>
            <option value="UR">Urdu</option>
            <option value="UZ">Uzbek</option>
            <option value="VI">Vietnamese</option>
            <option value="CY">Welsh</option>
            <option value="XH">Xhosa</option>
          </select>
          <div className="form__radio">
            <label htmlFor="A">
              <input type="radio" id="male" name="rate" value="A" checked />
              Todos los públicos.
            </label>
            <label htmlFor="7">
              <input type="radio" id="female" name="rate" value="7" />
              Mayores de 7 años.
            </label>
            <label htmlFor="12">
              <input type="radio" id="other" name="rate" value="12" />
              Mayores de 12 años.
            </label>
            <label htmlFor="16">
              <input type="radio" id="other" name="rate" value="16" />
              Mayores de 16 años.
            </label>
            <label htmlFor="18">
              <input type="radio" id="other" name="rate" value="18" />
              Mayores de 18 años.
            </label>
          </div>
          <div className="form__checkbox">
            <label htmlFor="comedy">
              <input type="checkbox" id="comedy" name="comedy" value="Comedia" />
              Comedia.
            </label>
            <label htmlFor="drama">
              <input type="checkbox" id="drama" name="drama" value="Drama" />
              Drama.
            </label>
            <label htmlFor="fantasy">
              <input type="checkbox" id="fantasy" name="fantasy" value="Fantasía" />
              Fantasía.
            </label>
            <label htmlFor="action">
              <input type="checkbox" id="action" name="action" value="Acción" />
              Acción..
            </label>
            <label htmlFor="familyfriendly">
              <input type="checkbox" id="familyfriendly" name="familyfriendly" value="Familiar" />
              Familiar.
            </label>
            <label htmlFor="terror">
              <input type="checkbox" id="terror" name="terror" value="Terror" />
              Terror.
            </label>
          </div>
          <FileInput />
        </form>

        <Card name={this.state.name} description={this.state.description} language={this.state.language} />
      </>
    );
  }
}

export default Form;
