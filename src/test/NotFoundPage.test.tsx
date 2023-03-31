import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

describe('NotFoundPage', () => {
  it('should render NotFoundPage', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );
    const button = screen.getByText('Go back to Home');
    expect(button).toBeInTheDocument();
  });
});
