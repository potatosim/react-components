import { FC, useEffect, useState } from 'react';
import CharacterItem from 'types/CharacterItem';
import Modal from 'components/Modal/Modal';

import RickAndMortyApi from 'api/RickAndMortyApi';
import Loader from 'components/Loader/Loader';
import { createPortal } from 'react-dom';
import ErrorNotification from 'components/ErrorNotification/ErrorNotification';

interface CardModalProps {
  onClose: () => void;
  characterId: number;
}

const CardModal: FC<CardModalProps> = ({ onClose, characterId }) => {
  const [character, setCharacter] = useState<CharacterItem | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => setIsError(false), 2000);

    return () => clearTimeout(id);
  }, [isError]);

  const fetchById = async (id: number) => {
    try {
      const data = await RickAndMortyApi.getCharacter(id);
      setCharacter(data);
    } catch (e) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchById(characterId);
  }, []);

  if (!character) {
    return <Loader />;
  }

  return (
    <>
      <Modal closeModal={onClose}>
        <h2>{character.name}</h2>
        <p> Gender: {character.gender}</p>
        <p> Species: {character.species}</p>
        <p> Status: {character.status}</p>
        <p> Origin: {character.origin.name}</p>
        <p> Location: {character.location.name}</p>
        <div>
          <img src={character.image} />
        </div>
      </Modal>
      {isError &&
        createPortal(
          <ErrorNotification mainText="Something went wrong🥲" text="Try again" />,
          document.body,
        )}
    </>
  );
};

export default CardModal;
