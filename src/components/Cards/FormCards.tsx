import FormCardItem from 'components/FormCardItem/FormCardItem';
import React, { Component } from 'react';
import { IFormCard } from 'types/IFormCard';
import styles from './Cards.module.scss';

export default class FormCards extends Component<{ cards: IFormCard[] }> {
  constructor(props: { cards: IFormCard[] }) {
    super(props);
  }
  render() {
    const { cards } = this.props;
    if (!cards.length) {
      return null;
    }
    return (
      <div className={styles.cardsWrapper}>
        {cards.map((card) => (
          <FormCardItem
            name={card.name}
            birthday={card.birthday}
            checkbox={card.checkbox}
            image={card.image}
            radio={card.radio}
            selected={card.selected}
            key={card.image}
          />
        ))}
      </div>
    );
  }
}
