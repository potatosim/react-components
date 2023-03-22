import React, { Component } from 'react';
import { IFormCard } from 'types/IFormCard';

export default class FormCardItem extends Component<IFormCard> {
  constructor(props: IFormCard) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <div>
          <img src={this.props.image} />
        </div>
        <p>{this.props.selected}</p>
        <p>{this.props.radio}</p>
        <p>{this.props.checkbox}</p>
      </div>
    );
  }
}
