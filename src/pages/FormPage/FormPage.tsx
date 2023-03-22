import Form from 'components/Form/Form';
import FormCards from 'components/FormCards/FormCards';
import React, { Component } from 'react';
import { IFormCard } from 'types/IFormCard';

export default class FormPage extends Component {
  state: { cards: IFormCard[] } = { cards: [] };

  handleAddCard = (card: IFormCard) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  componentDidUpdate() {
    localStorage.setItem('formCards', JSON.stringify(this.state.cards));
  }

  componentDidMount(): void {
    const formCards = localStorage.getItem('formCards');
    if (formCards) {
      this.setState({ cards: JSON.parse(formCards) });
    }
  }

  render() {
    return (
      <div>
        <Form addCard={this.handleAddCard} />
        <FormCards cards={this.state.cards} />
      </div>
    );
  }
}
