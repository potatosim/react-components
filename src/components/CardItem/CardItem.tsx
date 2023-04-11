import { TestId } from 'enum/TestId';
import { FC } from 'react';
import styles from './CardItem.module.scss';
import CharacterItem from 'types/CharacterItem';

interface CardItemProps {
  character: CharacterItem;
  onClick: () => void;
}

const CardItem: FC<CardItemProps> = ({ character, onClick }) => {
  return (
    <div onClick={onClick} data-testid={TestId.CardItem} className={styles.cardWrapper}>
      <h2 data-testid={TestId.CardName}>{character.name}</h2>
      <div className={styles.imageWrapper}>
        <img data-testid={TestId.CardImage} src={character.image} />
      </div>
    </div>
  );
};

export default CardItem;
