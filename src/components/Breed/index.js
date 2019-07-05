import React, { Component } from 'react';

import content from './content';
import { breedStyle } from './style';

class Breed extends Component {
  state = { breedInfo: undefined };

  componentDidMount() {
    const { activeLanguage, breedSizes, value } = this.props;

    const breed = Object.keys(breedSizes).filter(key => {
      switch (activeLanguage) {
        case 'pt':
          return breedSizes[key].pt_name === value;
        case 'en':
          return breedSizes[key].en_name === value;
        default:
          return null;
      }
    });

    this.setState({ breedInfo: breedSizes[breed] });
  }

  renderInfo = lang => {
    const { breedInfo } = this.state;
    let langIndex = 0;

    if (lang === 'pt') langIndex = 0;
    if (lang === 'en') langIndex = 1;

    if (!breedInfo) return <div>Carregando...</div>;
    else {
      return (
        <div className="breed-info">
          <div>
            <h3>{breedInfo[`${lang}_name`]}</h3>

            <p>{content[lang].text}</p>

            <img src={breedInfo.image} alt={breedInfo[`${lang}_name`]}></img>
          </div>

          <div
            className="breed-sizes"
            style={{ backgroundImage: `url(${breedStyle[lang].table_background})` }}>
            <div className="breed-column">
              <div className="breed-row">
                <span className="label">{content[lang].leash}</span>
                <span
                  className="size"
                  style={{ backgroundImage: `url(${breedStyle[lang].td_bg})` }}>
                  {breedInfo.leash[langIndex]}
                </span>
              </div>

              <div className="breed-row">
                <span className="label">{content[lang].leash_ruff}</span>
                <span
                  className="size"
                  style={{ backgroundImage: `url(${breedStyle[lang].td_bg})` }}>
                  {breedInfo.leash_ruff[langIndex]}
                </span>
              </div>

              <div className="breed-row">
                <span className="label">{content[lang].stepin}</span>
                <span
                  className="size"
                  style={{ backgroundImage: `url(${breedStyle[lang].td_bg})` }}>
                  {breedInfo.stepin[langIndex]}
                </span>
              </div>
            </div>

            <div className="breed-column">
              <div className="breed-row">
                <span className="label">{content[lang].collar}</span>
                <span
                  className="size"
                  style={{ backgroundImage: `url(${breedStyle[lang].td_bg})` }}>
                  {breedInfo.collar[langIndex]}
                </span>
              </div>

              <div className="breed-row">
                <span className="label">{content[lang].obedience}</span>
                <span
                  className="size"
                  style={{ backgroundImage: `url(${breedStyle[lang].td_bg})` }}>
                  {breedInfo.obedience[langIndex]}
                </span>
              </div>

              <div className="breed-row">
                <span className="label">{content[lang].meshplus}</span>
                <span
                  className="size"
                  style={{ backgroundImage: `url(${breedStyle[lang].td_bg})` }}>
                  {breedInfo.meshplus[langIndex]}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    const { activeLanguage } = this.props;

    return (
      <div>
        <img
          className="disclaimer-breed"
          src={breedStyle[activeLanguage].disclaimer_breed}
          alt="disclaimer-breed"
        />
        {this.renderInfo(activeLanguage)}
      </div>
    );
  }
}

export default Breed;
