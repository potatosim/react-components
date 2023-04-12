import { useState } from 'react';
import { TestId } from 'enum/TestId';
import { IFormCard } from 'components/FormCardItem';
import Form from 'components/Form';
import FormCards from 'components/FormCards/FormCards';

import styles from './FormPage.module.scss';

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
