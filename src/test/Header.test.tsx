import { render, screen } from '@testing-library/react';

import Header from 'layout/Header/Header';
import { MemoryRouter } from 'react-router-dom';
import { PagesNames } from 'enum/PagesNames';
import { TestId } from 'enum/TestId';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('should render header', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const header = screen.getByTestId(TestId.Header);
    expect(header).toBeInTheDocument();
  });

  it('should render page name', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const headerTitle = screen.getByTestId(TestId.HeaderTitle);
    expect(headerTitle).toHaveTextContent(PagesNames.Home);
  });

  it('should render page links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const homeLink = screen.getByTestId(TestId.HomePageLink);
    const aboutLink = screen.getByTestId(TestId.AboutPageLink);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it('should change page name', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByTestId(TestId.HeaderTitle)).toHaveTextContent(PagesNames.Home);

    act(() => {
      userEvent.click(screen.getByTestId(TestId.AboutPageLink));
    });

    expect(screen.getByTestId(TestId.HeaderTitle)).toHaveTextContent(PagesNames.AboutUs);

    act(() => {
      userEvent.click(screen.getByTestId(TestId.HomePageLink));
    });

    expect(screen.getByTestId(TestId.HeaderTitle)).toHaveTextContent(PagesNames.Home);
  });
});
