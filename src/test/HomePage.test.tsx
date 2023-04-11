import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios, { AxiosResponse } from 'axios';
import { TestId } from 'enum/TestId';
import HomePage from 'pages/HomePage/HomePage';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const SEARCH_WRONG_VALUE = 'ssssss';

const functionWithError = () => {
  throw new Error();
};
describe('HomePage', () => {
  const response: Partial<AxiosResponse> = {
    data: {
      results: [
        {
          name: 'Hanna',
          species: 'Human',
          gender: 'Unknown',
          status: 'Awake and alive',
          image:
            'https://avatars.mds.yandex.net/i?id=6a5252daff56ea0d87522bc0ee6b2257-4429068-images-thumbs&n=13',
          id: 1,
          origin: { name: 'HZ' },
          location: { name: 'Planet' },
        },
        {
          name: 'Dan',
          species: 'Human',
          gender: 'Horse',
          status: 'Alive',
          image:
            'https://www.shutterstock.com/image-vector/dirty-dan-logo-text-design-260nw-2045229281.jpg',
          id: 2,
          origin: { name: 'Something' },
          location: { name: 'Location' },
        },
        {
          name: 'Marin',
          species: 'Human',
          gender: 'Girl',
          status: 'Alive',
          image: 'https://image.lexica.art/full_jpg/d5fd3e1c-f23b-497c-a440-19c747604e0c',
          id: 3,
          origin: { name: 'Something' },
          location: { name: 'Location' },
        },
      ],
    },
  };

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(response);
  });

  it('should render HomePage', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
      );
    });
    const cards = screen.getByTestId(TestId.CardList);
    const searchField = screen.getByTestId(TestId.CardList);
    [cards, searchField].forEach((element) => expect(element).toBeInTheDocument());
  });

  it('should render characters cards', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
      );
    });

    const cards = await screen.findAllByTestId(TestId.CardItem);

    expect(cards.length).toBe(response.data.results.length);
  });

  it('should show error message', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>,
      );
    });

    const input = screen.getByTestId(TestId.SearchField);
    const button = screen.getByTestId(TestId.SearchFieldBtn);

    await act(async () => {
      userEvent.type(input, SEARCH_WRONG_VALUE);
      userEvent.click(button);
    });

    expect(functionWithError).toThrowError(Error);
  });
});
