import userEvent from '@testing-library/user-event';
import { TestId } from 'enum/TestId';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from 'routes/AppRouter';
import { act } from 'react-dom/test-utils';

describe('AppRouter', () => {
  it('full app rendering/navigating', () => {
    render(
      <MemoryRouter>
        <AppRouter />
      </MemoryRouter>,
    );
    expect(screen.getByTestId(TestId.SearchField)).toBeInTheDocument();
    const aboutLink = screen.getByTestId(TestId.AboutPageLink);

    act(() => {
      userEvent.click(aboutLink);
    });

    expect(aboutLink).toBeInTheDocument();
  });

  it('invalid path should redirect to 404', () => {
    render(
      <MemoryRouter initialEntries={['/random']}>
        <AppRouter />
      </MemoryRouter>,
    );
    const link = screen.getByText('Go back to Home');
    expect(link).toBeInTheDocument();
  });
});
