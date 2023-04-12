import { render, screen } from '@testing-library/react';
import { AxiosResponse } from 'axios';
import { act } from 'react-dom/test-utils';
import Cards from 'components/Cards';
import { TestId } from 'enum/TestId';

describe('Cards', () => {
  // const response: Partial<AxiosResponse> = {
  //   data: [
  //     {
  //       name: 'Hanna',
  //       species: 'Human',
  //       gender: 'Unknown',
  //       status: 'Awake and alive',
  //       image:
  //         'https://avatars.mds.yandex.net/i?id=6a5252daff56ea0d87522bc0ee6b2257-4429068-images-thumbs&n=13',
  //       id: 1,
  //       origin: { name: 'HZ' },
  //       location: { name: 'Planet' },
  //     },
  //     {
  //       name: 'Dan',
  //       species: 'Human',
  //       gender: 'Horse',
  //       status: 'Alive',
  //       image:
  //         'https://www.shutterstock.com/image-vector/dirty-dan-logo-text-design-260nw-2045229281.jpg',
  //       id: 2,
  //       origin: { name: 'Something' },
  //       location: { name: 'Location' },
  //     },
  //     {
  //       name: 'Marin',
  //       species: 'Human',
  //       gender: 'Girl',
  //       status: 'Alive',
  //       image: 'https://image.lexica.art/full_jpg/d5fd3e1c-f23b-497c-a440-19c747604e0c',
  //       id: 3,
  //       origin: { name: 'Something' },
  //       location: { name: 'Location' },
  //     },
  //   ],
  // };
  // it('should render card-item', async () => {
  //   await act(async () => {
  //     render(<Cards characters={response.data} />);
  //   });
  //   const cardList = screen.getByTestId(TestId.CardList);
  //   expect(cardList).toBeInTheDocument();
  // });
  // it('should render user cards', async () => {
  //   await act(async () => {
  //     render(<Cards characters={response.data} />);
  //   });
  //   const cards = await screen.findAllByTestId('card-item');
  //   expect(cards.length).toBe(response.data.length);
  // });
});
