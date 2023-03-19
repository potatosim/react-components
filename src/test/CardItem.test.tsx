import { render, screen } from '@testing-library/react';

import CardItem from 'components/CardItem/CardItem';

describe('CarItem', () => {
  const mockCardData = {
    name: 'Anna',
    email: 'test@test.test',
    phone: '6666666',
    website: 'ann.com',
  };
  it('should render card-item', () => {
    render(<CardItem {...mockCardData} />);
    const card = screen.getByTestId('card-item');
    expect(card).toBeInTheDocument();
  });

  it('should render card elements', () => {
    render(<CardItem {...mockCardData} />);
    const name = screen.getByTestId('card-name');
    const email = screen.getByTestId('card-email');
    const phone = screen.getByTestId('card-phone');
    expect(name).toContainHTML(mockCardData.name);
    expect(email).toContainHTML(mockCardData.email);
    expect(phone).toContainHTML(mockCardData.phone);
  });
});
