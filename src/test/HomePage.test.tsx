import { render, screen } from '@testing-library/react';
import { TestId } from 'enum/TestId';
import HomePage from 'pages/HomePage/HomePage';
import { MemoryRouter } from 'react-router-dom';

describe('HomePage', () => {
  it('should render HomePage', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );
    const cards = screen.getByTestId(TestId.CardList);
    const searchField = screen.getByTestId(TestId.CardList);
    [cards, searchField].forEach((element) => expect(element).toBeInTheDocument());
  });
});
