import { useAppDispatch } from 'hooks/reduxHooks';
import { addNewCard } from 'handlers/formSlice';
import { TestId } from 'enum/TestId';
import { IFormCard } from 'components/FormCardItem';
import Form from 'components/Form';
import FormCards from 'components/FormCards';

import styles from './FormPage.module.scss';

const FormPage = () => {
  const dispatch = useAppDispatch();

  const handleAddCard = (card: IFormCard) => {
    dispatch(addNewCard(card));
  };

  return (
    <div data-testid={TestId.FormPageWrapper} className={styles.pageWrapper}>
      <Form addCard={handleAddCard} />
      <FormCards />
    </div>
  );
};

export default FormPage;
