import Form from 'components/Form/Form';
import FormCards from 'components/Cards/FormCards';
import { useState } from 'react';
import { IFormCard } from 'types/IFormCard';
import styles from './FormPage.module.scss';
import { TestId } from 'enum/TestId';

const FormPage = () => {
  const [cards, setCards] = useState<IFormCard[]>([]);

  const handleAddCard = (card: IFormCard) => {
    setCards([...cards, card]);
  };
  return (
    <div data-testid={TestId.FormPageWrapper} className={styles.pageWrapper}>
      <Form addCard={handleAddCard} />
      <FormCards cards={cards} />
    </div>
  );
};

export default FormPage;
