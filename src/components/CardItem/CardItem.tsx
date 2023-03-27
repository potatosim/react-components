import { TestId } from 'enum/TestId';
import { FC } from 'react';
import User from 'types/User';
import styles from './CardItem.module.scss';

const CardItem: FC<User> = ({ email, name, phone, website }) => {
  return (
    <div data-testid={TestId.CardItem} className={styles.cardWrapper}>
      <h2 data-testid={TestId.CardName}>{name}</h2>
      <div className={styles.imageWrapper}>
        <img
          src={
            'https://previews.123rf.com/images/luplupme/luplupme1606/luplupme160600130/57972837-anonymous-man-face-and-anonymous-face-man-with-hidden-face-vector-illustration-anonymous-face.jpg'
          }
        />
      </div>
      <p data-testid={TestId.CardEmail}>{email}</p>
      <p data-testid={TestId.CardPhone}>{phone}</p>
      <a href={website}>{website}</a>
    </div>
  );
};

export default CardItem;
