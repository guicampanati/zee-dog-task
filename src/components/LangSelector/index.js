import React, { Component } from 'react';

import content from './content';
import { langSelectorStyle } from './style';

class LangSelector extends Component {
  handleClick = () => {
    this.props.onLangClick(this.props.activeLanguage);
  };

  render() {
    const { activeLanguage } = this.props;

    return (
      <div className="selector" style={langSelectorStyle[activeLanguage]}>
        <div className="lang-selector-content">
          <p>{activeLanguage.toUpperCase()}</p>

          <h2>
            {content[activeLanguage].title1}
            <br />
            {content[activeLanguage].title2}
          </h2>

          <p>{content[activeLanguage].text}</p>

          <img
            className="lang-selector-button"
            src={langSelectorStyle[activeLanguage].buttonImgSrc}
            alt={content[activeLanguage].alt}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default LangSelector;
