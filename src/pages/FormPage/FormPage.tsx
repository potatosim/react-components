import Form from 'components/Form/Form';
import FormCards from 'components/Cards/FormCards';
import React, { Component } from 'react';
import { IFormCard } from 'types/IFormCard';
import styles from './FormPage.module.scss';
import { TestId } from 'enum/TestId';

export default class FormPage extends Component {
  state: { cards: IFormCard[] } = { cards: [] };

  handleAddCard = (card: IFormCard) => {
    this.setState({ cards: [...this.state.cards, card] });
  };

  render() {
    return (
      <div data-testid={TestId.FormPageWrapper} className={styles.pageWrapper}>
        <Form addCard={this.handleAddCard} />
        <FormCards cards={this.state.cards} />
      </div>
    );
  }
}
