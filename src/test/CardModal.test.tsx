import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CardModal from 'components/CardModal';
import { TestId } from 'enum/TestId';
import { rest } from 'msw';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { setupServer } from 'msw/node';
import 'cross-fetch/polyfill';

const response = {
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

const handlers = [
  rest.get('https://rickandmortyapi.com/api/character/1', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response));
  }),
];

const server = setupServer(...handlers);

describe('CardModal', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should render CardModal', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <CardModal onClose={() => {}} characterId={response.id} />
        </Provider>,
      );
    });

    const name = await screen.findByTestId(TestId.ModalName);
    const gender = await screen.findByTestId(TestId.ModalGender);

    expect(name).toHaveTextContent(response.name);
    expect(gender).toHaveTextContent(response.gender);
  });

  it('should get a character', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <CardModal onClose={() => {}} characterId={response.id} />
        </Provider>,
      );
    });

    const name = await screen.findByTestId(TestId.ModalName);
    expect(name).toBeInTheDocument();
  });

  it('Should display an error when the request fail', async () => {
    server.use(
      rest.get(`https://rickandmortyapi.com/api/character/${response.id}`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json('an error has occurred'));
      }),
    );
  });
});
