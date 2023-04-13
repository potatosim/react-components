import { FC } from 'react';
import { uid } from 'uid';
import FormCardItem from 'components/FormCardItem';
import CardWrapper from 'components/CardWrapper';
import { useAppSelector } from 'hooks/reduxHooks';

const FormCards: FC = () => {
  const { formCards } = useAppSelector((state) => state.formCards);

  if (!formCards.length) {
    return null;
  }
  return (
    <CardWrapper>
      {formCards.map((card) => (
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
