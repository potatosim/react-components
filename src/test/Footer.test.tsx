import { render, screen } from '@testing-library/react';
import Footer from 'layout/Footer/Footer';

describe('Footer', () => {
  it('should render footer', () => {
    render(<Footer />);
    const link = screen.getByTestId('footer-link');
    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', 'https://github.com/potatosim');
  });
});
