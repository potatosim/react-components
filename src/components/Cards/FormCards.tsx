import FormCardItem from 'components/FormCardItem/FormCardItem';
import { FC } from 'react';
import { IFormCard } from 'types/IFormCard';
import { uid } from 'uid';
import styles from './Cards.module.scss';

interface FormCardsProps {
  cards: IFormCard[];
}

const FormCards: FC<FormCardsProps> = ({ cards }) => {
  if (!cards.length) {
    return null;
  }
  return (
    <div className={styles.cardsWrapper}>
      {cards.map((card) => (
        <FormCardItem
          name={card.name}
          birthday={card.birthday}
          checkbox={card.checkbox}
          image={card.image}
          radio={card.radio}
          selected={card.selected}
          key={uid()}
        />
      ))}
    </div>
  );
};

export default FormCards;
