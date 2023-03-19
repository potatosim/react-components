import React, { Component } from 'react';

import CardItem from 'components/CardItem/CardItem';
import { TestId } from 'enum/TestId';
import User from 'types/User';
import axios from 'axios';
import styles from './Cards.module.css';

export default class Cards extends Component {
  state: { users: User[] } = { users: [] };

  async componentDidMount() {
    const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    this.setState({ users: data });
  }

  render() {
    return (
      <div data-testid={TestId.CardList} className={styles.cardsWrapper}>
        {this.state.users.map((item) => {
          return (
            <CardItem
              name={item.name}
              phone={item.phone}
              email={item.email}
              website={item.website}
              key={item.name}
            />
          );
        })}
      </div>
    );
  }
}
