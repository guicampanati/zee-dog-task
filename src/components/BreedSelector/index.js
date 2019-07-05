import React, { Component } from 'react';

import Breed from '../Breed';
import Field from './Field';
import content from './content';
import { breedSelectorStyle } from './style';

class BreedSelector extends Component {
  state = {
    shouldRenderSelector: true,
    shouldRenderField: false,
    shouldRenderBreed: false,
    breedNames: [],
    activeBreed: undefined,
  };

  componentDidMount() {
    const { activeLanguage, breedSizes } = this.props;
    let list = [];

    for (const name of Object.keys(breedSizes)) {
      switch (activeLanguage) {
        case 'pt':
          list.push(breedSizes[name].pt_name);
          break;
        case 'en':
          list.push(breedSizes[name].en_name);
          break;
        default:
          return;
      }
    }

    this.setState({ breedNames: list });
  }

  handleSelector = () => {
    this.setState({ shouldRenderField: true });
  };

  handleBreed = value => {
    this.setState({
      shouldRenderSelector: false,
      shouldRenderField: false,
      shouldRenderBreed: true,
      activeBreed: value,
    });
  };

  handleChooseBreed = () => {
    this.setState({
      shouldRenderSelector: true,
      shouldRenderField: false,
      shouldRenderBreed: false,
      activeBreed: undefined,
    });
  };

  render() {
    const { onBackClick, activeLanguage, breedSizes } = this.props;
    const {
      shouldRenderSelector,
      shouldRenderField,
      shouldRenderBreed,
      breedNames,
      activeBreed,
    } = this.state;

    return (
      <div className="selector" style={breedSelectorStyle[activeLanguage]}>
        {shouldRenderSelector && (
          <div className="breed-selector-content">
            <img
              className="breed-return-button"
              src={breedSelectorStyle[activeLanguage].returnBtn}
              onClick={onBackClick}
              alt="breed-return-button"
            />

            <h3>{content[activeLanguage].title}</h3>

            <p>{content[activeLanguage].text}</p>

            <img
              className="breed-selector-button"
              src={breedSelectorStyle[activeLanguage].dropdownBalloon}
              onClick={this.handleSelector}
              alt="breed-selector-button"
            />

            {shouldRenderField && (
              <Field
                activeLanguage={activeLanguage}
                breedNames={breedNames}
                onBreedClick={this.handleBreed}
              />
            )}

            <img
              className="disclaimer"
              src={breedSelectorStyle[activeLanguage].disclaimer}
              alt="disclaimer"
            />
          </div>
        )}

        {shouldRenderBreed && (
          <div>
            <img
              className="breed-return-button-2"
              src={breedSelectorStyle[activeLanguage].returnBtn2}
              onClick={this.handleChooseBreed}
              alt="breed-return-button-2"
            />

            <Breed activeLanguage={activeLanguage} breedSizes={breedSizes} value={activeBreed} />
          </div>
        )}
      </div>
    );
  }
}

export default BreedSelector;
