import { FC, useState } from 'react';

import CardItem from 'components/CardItem/CardItem';
import { TestId } from 'enum/TestId';
import styles from './Cards.module.scss';
import { uid } from 'uid';
import CharacterItem from 'types/CharacterItem';
import { createPortal } from 'react-dom';
import CardModal from 'components/CardModal/CardModal';

interface CadrsProps {
  characters: CharacterItem[];
}

const Cards: FC<CadrsProps> = ({ characters }) => {
  const [characterId, setCharacterId] = useState<number | null>(null);

  const handleCloseModal = () => {
    setCharacterId(null);
  };

  return (
    <div data-testid={TestId.CardList} className={styles.cardsWrapper}>
      {characters.map((item) => {
        return <CardItem onClick={() => setCharacterId(item.id)} character={item} key={uid()} />;
      })}
      {!!characterId &&
        createPortal(
          <CardModal characterId={characterId} onClose={handleCloseModal} />,
          document.body,
        )}
    </div>
  );
};

export default Cards;
