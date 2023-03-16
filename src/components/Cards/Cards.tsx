import CardItem from 'components/CardItem/CardItem';
import React, { Component } from 'react';
import User from 'types/User';
import styles from './Cards.module.css';

export default class Cards extends Component {
  state: { users: User[] } = { users: [] };

  async fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = (await response.json()) as User[];
    this.setState({ users: data });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(this.state.users);
    return (
      <div className={styles.cardsWrapper}>
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
