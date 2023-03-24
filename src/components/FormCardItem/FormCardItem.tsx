import { TestId } from 'enum/TestId';
import React, { Component } from 'react';
import { IFormCard } from 'types/IFormCard';
import styles from './FormCardItem.module.scss';

export default class FormCardItem extends Component<IFormCard> {
  constructor(props: IFormCard) {
    super(props);
  }
  render() {
    return (
      <div data-testid={TestId.FormCardItem} className={styles.cardWrapper}>
        <h2 data-testid={TestId.FormCardName}>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p data-testid={TestId.FormCardSex}>{this.props.radio}</p>
        <div className={styles.imageWrapper}>
          <img src={this.props.image} />
        </div>
        <p data-testid={TestId.FormCardCountry}>{this.props.selected}</p>
        <p>Posted on {`${new Date().toLocaleDateString()}`}</p>
      </div>
    );
  }
}
