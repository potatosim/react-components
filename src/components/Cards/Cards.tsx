import React, { FC, useState } from 'react';
import { uid } from 'uid';
import CharacterItem from 'types/CharacterItem';
import { TestId } from 'enum/TestId';
import CardItem from 'components/CardItem';
import CardModal from 'components/CardModal';
import CardWrapper from 'components/CardWrapper';
import Portal from 'components/Portal';

interface CardListProps {
  characters?: CharacterItem[];
  isError: boolean;
}

const Cards: FC<CardListProps> = ({ characters, isError }) => {
  const [characterId, setCharacterId] = useState<number | null>(null);

  const handleCloseModal = () => {
    setCharacterId(null);
  };

  if (isError || !characters) {
    return <div>No characters were found</div>;
  }

  return (
    <CardWrapper data-testid={TestId.CardList}>
      {characters.map((item) => (
        <CardItem onClick={() => setCharacterId(item.id)} character={item} key={uid()} />
      ))}
      <Portal condition={!!characterId}>
        <CardModal characterId={characterId!} onClose={handleCloseModal} />
      </Portal>
    </CardWrapper>
  );
};

export default React.memo(Cards);
