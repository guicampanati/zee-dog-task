import React, { Component } from 'react';

import BreedSelector from '../BreedSelector';
import LangSelector from '../LangSelector';
import Footer from '../Footer';

class App extends Component {
  state = {
    languages: ['pt', 'en'],
    shouldRenderLangSelector: true,
    shouldRenderBreedSelector: false,
    activeLanguage: undefined,
    breedSizes: undefined,
  };

  componentDidMount() {
    this.fetchData().then(res => this.setState({ breedSizes: res }));
  }

  fetchData = async () => {
    const response = await fetch(
      'https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json',
    );
    const json = await response.json();

    return json;
  };

  handleLang = value => {
    this.setState({
      activeLanguage: value,
      shouldRenderLangSelector: false,
      shouldRenderBreedSelector: true,
    });
  };

  handleBack = () => {
    this.setState({
      activeLanguage: undefined,
      shouldRenderLangSelector: true,
      shouldRenderBreedSelector: false,
    });
  };

  render() {
    const {
      languages,
      shouldRenderLangSelector,
      shouldRenderBreedSelector,
      activeLanguage,
      breedSizes,
    } = this.state;

    if (!breedSizes) return <div>Carregando...</div>;
    else {
      return (
        <div className="container">
          {shouldRenderLangSelector && (
            <div className="box">
              {languages.map((language, index) => (
                <LangSelector key={index} activeLanguage={language} onLangClick={this.handleLang} />
              ))}
            </div>
          )}

          {shouldRenderBreedSelector && (
            <BreedSelector
              activeLanguage={activeLanguage}
              breedSizes={breedSizes}
              onBackClick={this.handleBack}
            />
          )}

          <Footer />
        </div>
      );
    }
  }
}

export default App;
