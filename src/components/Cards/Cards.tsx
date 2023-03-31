import { useEffect, useState } from 'react';

import CardItem from 'components/CardItem/CardItem';
import { TestId } from 'enum/TestId';
import User from 'types/User';
import axios from 'axios';
import styles from './Cards.module.scss';

const Cards = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    setUsers(data);
  };

  return (
    <div data-testid={TestId.CardList} className={styles.cardsWrapper}>
      {users.map((item) => {
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
};

export default Cards;
