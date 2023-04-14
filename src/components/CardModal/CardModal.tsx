import { FC } from 'react';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';
import { TestId } from 'enum/TestId';
import { useGetCharacterQuery } from 'services/charactersApi';

interface CardModalProps {
  onClose: () => void;
  characterId: number;
}

const CardModal: FC<CardModalProps> = ({ onClose, characterId }) => {
  const { data: character } = useGetCharacterQuery(characterId);

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
