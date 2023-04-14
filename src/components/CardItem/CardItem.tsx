import React, { FC } from 'react';
import CharacterItem from 'types/CharacterItem';
import { TestId } from 'enum/TestId';

import styles from './CardItem.module.scss';

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

export default React.memo(CardItem);
