import { render, screen } from '@testing-library/react';

import Main from 'layout/Main/Main';
import { TestId } from 'enum/TestId';

describe('Main', () => {
  it('should render Main', () => {
    render(<Main />);
    const main = screen.getByTestId(TestId.Main);
    expect(main).toBeInTheDocument();
  });
});
