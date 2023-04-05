import { TestId } from 'enum/TestId';
import { FC } from 'react';
import styles from './CardItem.module.scss';
import CharacterItem from 'types/CharacterItem';

const CardItem: FC<CharacterItem> = ({ name, species, gender, status, image }) => {
  return (
    <div data-testid={TestId.CardItem} className={styles.cardWrapper}>
      <h2 data-testid={TestId.CardName}>{name}</h2>
      <div className={styles.imageWrapper}>
        <img src={image} />
      </div>
      <p data-testid={TestId.CardEmail}>Species: {species}</p>
      <p data-testid={TestId.CardPhone}>Gender: {gender}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default CardItem;
