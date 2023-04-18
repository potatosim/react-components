import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { TestId } from 'enum/TestId';
import HomePage from 'pages/HomePage';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'cross-fetch/polyfill';

const SEARCH_WRONG_VALUE = 'ssssss';

const mockData = {
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
};

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockData));
  }),
];

const server = setupServer(...handlers);

const functionWithError = () => {
  throw new Error();
};

describe('HomePage', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());
  it('should render HomePage', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </Provider>,
      );
    });

    await waitFor(async () => {
      const cards = screen.getAllByTestId(TestId.CardItem);
      expect(cards).toHaveLength(3);
    });
  });

  it('should render characters cards', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </Provider>,
      );
    });

    const cards = await screen.findAllByTestId(TestId.CardItem);

    expect(cards.length).toBe(mockData.results.length);
  });

  it('should show error message', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <HomePage />
          </MemoryRouter>
        </Provider>,
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

  it('Should display an error when the request fail', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json('an error has occurred'));
      }),
    );
  });
});
