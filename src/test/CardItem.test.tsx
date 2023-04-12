import { render, screen } from '@testing-library/react';

import { TestId } from 'enum/TestId';
import CardItem from 'components/CardItem';

describe('CardItem', () => {
  const onClick = jest.fn();

  const mockCardData = {
    name: 'Hanna',
    species: 'Human',
    gender: 'Unknown',
    status: 'Awake and alive',
    image:
      'https://avatars.mds.yandex.net/i?id=6a5252daff56ea0d87522bc0ee6b2257-4429068-images-thumbs&n=13',
    id: 1,
    origin: { name: 'HZ' },
    location: { name: 'Planet' },
  };
  it('should render card-item', () => {
    render(<CardItem onClick={onClick} character={mockCardData} />);
    const card = screen.getByTestId(TestId.CardItem);
    expect(card).toBeInTheDocument();
  });

  it('should render card elements', () => {
    render(<CardItem onClick={onClick} character={mockCardData} />);
    const name = screen.getByTestId(TestId.CardName);
    const image = screen.getByTestId(TestId.CardImage);

    expect(name).toHaveTextContent(mockCardData.name);
    expect(image).toHaveAttribute('src', `${mockCardData.image}`);
  });
});
