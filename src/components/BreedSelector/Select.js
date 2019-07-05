import React, { Component } from 'react';

class Select extends Component {
  handleClick = () => {
    this.props.onBreedClick(this.props.value);
  };

  render() {
    const { value } = this.props;

    return <li onClick={this.handleClick}>{value}</li>;
  }
}

export default Select;
