import { render, screen } from '@testing-library/react';

import Footer from 'layout/Footer';
import { TestId } from 'enum/TestId';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);
    const footer = screen.getByTestId(TestId.Footer);
    expect(footer).toBeInTheDocument();
  });

  it('should render footer link', () => {
    render(<Footer />);
    const link = screen.getByTestId(TestId.FooterLink);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
  });
});
