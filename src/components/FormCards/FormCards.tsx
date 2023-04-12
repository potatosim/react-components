import { FC } from 'react';
import { uid } from 'uid';
import FormCardItem, { IFormCard } from 'components/FormCardItem';
import CardWrapper from 'components/CardWrapper';

interface FormCardsProps {
  cards: IFormCard[];
}

const FormCards: FC<FormCardsProps> = ({ cards }) => {
  if (!cards.length) {
    return null;
  }
  return (
    <CardWrapper>
      {cards.map((card) => (
        <FormCardItem
          name={card.name}
          birthday={card.birthday}
          image={card.image}
          radio={card.radio}
          selected={card.selected}
          key={uid()}
        />
      ))}
    </CardWrapper>
  );
};

export default FormCards;
