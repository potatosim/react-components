import React, { Component } from 'react';
import User from 'types/User';
import styles from './CardItem.module.css';

export default class CardItem extends Component<User> {
  render() {
    return (
      <div data-testid="card-item" className={styles.cardWrapper}>
        <h2 data-testid="card-name">{this.props.name}</h2>
        <div className={styles.imageWrapper}>
          <img
            src={
              'https://previews.123rf.com/images/luplupme/luplupme1606/luplupme160600130/57972837-anonymous-man-face-and-anonymous-face-man-with-hidden-face-vector-illustration-anonymous-face.jpg'
            }
          />
        </div>
        <p data-testid="card-email">{this.props.email}</p>
        <p data-testid="card-phone">{this.props.phone}</p>
        <a href={this.props.website}>{this.props.website}</a>
      </div>
    );
  }
}
