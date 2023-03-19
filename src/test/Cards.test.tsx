import axios, { AxiosResponse } from 'axios';
import { render, screen } from '@testing-library/react';

import Cards from 'components/Cards/Cards';
import { TestId } from 'enum/TestId';
import { act } from 'react-dom/test-utils';

jest.mock('axios');
describe('Cards', () => {
  const response: Partial<AxiosResponse> = {
    data: [
      {
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
      },
      {
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
      },
      {
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
        website: 'ramiro.info',
      },
    ],
  };
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(response);
  });

  it('should render card-item', async () => {
    await act(async () => {
      render(<Cards />);
    });
    const cardList = screen.getByTestId(TestId.CardList);
    expect(cardList).toBeInTheDocument();
  });

  it('should render user cards', async () => {
    await act(async () => {
      render(<Cards />);
    });
    const cards = await screen.findAllByTestId('card-item');
    expect(cards.length).toBe(response.data.length);
  });
});
