import { render, screen } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';
import { act } from 'react-dom/test-utils';
import CardModal from 'components/CardModal';
import { TestId } from 'enum/TestId';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('CardModal', () => {
  const response: Partial<AxiosResponse> = {
    data: {
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
  };

  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(response);
  });

  it('should render CardModal', async () => {
    await act(async () => {
      render(<CardModal onClose={() => {}} characterId={1} />);
    });

    const name = await screen.findByTestId(TestId.ModalName);
    const gender = await screen.findByTestId(TestId.ModalGender);

    expect(name).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });

  it('should get a character', async () => {
    await act(async () => {
      render(<CardModal onClose={() => {}} characterId={response.data.id} />);
    });

    const name = await screen.findByTestId(TestId.ModalName);
    expect(name).toBeInTheDocument();
  });
});
