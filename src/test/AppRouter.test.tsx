import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { TestId } from 'enum/TestId';
import AppRouter from 'routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('AppRouter', () => {
  it('full app rendering/navigating', () => {
    act(() => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <AppRouter />
          </MemoryRouter>
        </Provider>,
      );
    });
    expect(screen.getByTestId(TestId.SearchField)).toBeInTheDocument();
    const aboutLink = screen.getByTestId(TestId.AboutPageLink);

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
