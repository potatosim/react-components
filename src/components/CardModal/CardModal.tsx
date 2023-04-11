import { FC, useEffect, useState } from 'react';
import CharacterItem from 'types/CharacterItem';
import Modal from 'components/Modal/Modal';

import RickAndMortyApi from 'api/RickAndMortyApi';
import Loader from 'components/Loader/Loader';
import { TestId } from 'enum/TestId';

interface CardModalProps {
  onClose: () => void;
  characterId: number;
}

const CardModal: FC<CardModalProps> = ({ onClose, characterId }) => {
  const [character, setCharacter] = useState<CharacterItem | null>(null);

  const fetchById = async () => {
    const data = await RickAndMortyApi.getCharacter(characterId);
    setCharacter(data);
  };

  useEffect(() => {
    fetchById();
  }, []);

  if (!character) {
    return <Loader />;
  }

  return (
    <>
      <Modal closeModal={onClose}>
        <h2 data-testid={TestId.ModalName}>{character.name}</h2>
        <p data-testid={TestId.ModalGender}> Gender: {character.gender}</p>
        <p> Species: {character.species}</p>
        <p> Status: {character.status}</p>
        <p> Origin: {character.origin.name}</p>
        <p> Location: {character.location.name}</p>
        <div>
          <img src={character.image} />
        </div>
      </Modal>
    </>
  );
};

export default CardModal;
