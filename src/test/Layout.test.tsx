import { render, screen } from '@testing-library/react';

import Layout from 'layout/Layout/Layout';
import { MemoryRouter } from 'react-router-dom';
import { TestId } from 'enum/TestId';

describe('Layout', () => {
  it('should render layout', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );
    const layout = screen.getByTestId(TestId.Layout);
    expect(layout).toBeInTheDocument();
  });

  it('should render layout components', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );

    const header = screen.getByTestId(TestId.Header);
    const main = screen.getByTestId(TestId.Main);
    const footer = screen.getByTestId(TestId.Footer);

    [header, main, footer].forEach((element) => expect(element).toBeInTheDocument());
  });
});
