import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('should render NotFoundPage', () => {
    render(<NotFoundPage />);
    const link = screen.getByText('Go back to Home');
    expect(link).toBeInTheDocument();
  });
});
