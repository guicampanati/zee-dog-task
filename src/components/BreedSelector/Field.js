import React, { Component } from 'react';

import Select from './Select';

class Field extends Component {
  state = { filteredSuggestions: this.props.breedNames };

  onChange = evt => {
    const { breedNames } = this.props;
    const value = evt.target.value;

    const filteredSuggestions = breedNames.filter(
      key => key.toLowerCase().indexOf(value.toLowerCase()) > -1,
    );

    this.setState({ filteredSuggestions });
  };

  handleBreedSelect = value => {
    this.props.onBreedClick(value);
  };

  render() {
    const { filteredSuggestions } = this.state;

    return (
      <div className="breed-list">
        <input className="breed-list-input" type="text" onChange={this.onChange}></input>
        <ul className="breed-list-items">
          {filteredSuggestions.map((breed, index) => (
            <Select key={index} value={breed} onBreedClick={this.handleBreedSelect} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Field;
