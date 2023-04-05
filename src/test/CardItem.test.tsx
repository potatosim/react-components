import { render, screen } from '@testing-library/react';

import CardItem from 'components/CardItem/CardItem';
import { TestId } from 'enum/TestId';

describe('CardItem', () => {
  const mockCardData = {
    name: 'Anna',
    email: 'test@test.test',
    phone: '6666666',
    website: 'ann.com',
  };
  // it('should render card-item', () => {
  //   render(<CardItem {...mockCardData} />);
  //   const card = screen.getByTestId(TestId.CardItem);
  //   expect(card).toBeInTheDocument();
  // });

  // it('should render card elements', () => {
  //   render(<CardItem {...mockCardData} />);
  //   const name = screen.getByTestId(TestId.CardName);
  //   const email = screen.getByTestId(TestId.CardEmail);
  //   const phone = screen.getByTestId(TestId.CardPhone);
  //   expect(name).toHaveTextContent(mockCardData.name);
  //   expect(email).toHaveTextContent(mockCardData.email);
  //   expect(phone).toHaveTextContent(mockCardData.phone);
  // });
});
