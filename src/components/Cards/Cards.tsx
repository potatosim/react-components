import { FC } from 'react';

import CardItem from 'components/CardItem/CardItem';
import { TestId } from 'enum/TestId';
import styles from './Cards.module.scss';
import { uid } from 'uid';
import CharacterItem from 'types/CharacterItem';

interface CadrsProps {
  characters: CharacterItem[];
}

const Cards: FC<CadrsProps> = ({ characters }) => {
  return (
    <div data-testid={TestId.CardList} className={styles.cardsWrapper}>
      {characters.map((item) => {
        return (
          <CardItem
            name={item.name}
            species={item.species}
            gender={item.gender}
            status={item.status}
            image={item.image}
            key={uid()}
          />
        );
      })}
    </div>
  );
};

export default Cards;
