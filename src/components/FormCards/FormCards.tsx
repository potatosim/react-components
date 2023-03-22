import FormCardItem from 'components/FormCardItem/FormCardItem';
import React, { Component } from 'react';
import { IFormCard } from 'types/IFormCard';

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
      <div>
        {cards.map((card) => (
          <FormCardItem
            name={card.name}
            birthday={card.birthday}
            checkbox={card.checkbox}
            image={card.image}
            radio={card.radio}
            selected={card.selected}
            key={card.name + Date.now()}
          />
        ))}
      </div>
    );
  }
}
