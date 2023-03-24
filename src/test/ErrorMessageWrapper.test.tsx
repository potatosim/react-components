import { render, screen } from '@testing-library/react';
import ErrorMessageWrapper from 'components/ErrorMessageWrapper/ErrorMessageWrapper';
import { TestId } from 'enum/TestId';

describe('Error Message', () => {
  it('should render Error Message', () => {
    render(
      <ErrorMessageWrapper errorMessage="Incorrect">
        <div>Children</div>
      </ErrorMessageWrapper>,
    );
    const errorText = screen.getByTestId(TestId.ErrorMessage);
    expect(errorText).toBeInTheDocument();
  });
});
