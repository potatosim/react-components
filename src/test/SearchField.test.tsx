import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import SearchField from 'components/SearchField';
import { TestId } from 'enum/TestId';

const SEARCH_FIELD_KEY = 'searchValue';
const SEARCH_FIELD_VALUE = 'some value';

describe('SearchField', () => {
  // beforeEach(() => {
  //   localStorage.removeItem(SEARCH_FIELD_KEY);
  // });
  // it('should render input', () => {
  //   render(<SearchField value={SEARCH_FIELD_VALUE} onClick={async () => {}} setValue={() => {}} />);
  //   const input = screen.getByPlaceholderText('Enter character name');
  //   expect(input).toBeInTheDocument();
  // });
  // it('input should work correctly', () => {
  //   render(<SearchField value={SEARCH_FIELD_VALUE} onClick={async () => {}} setValue={() => {}} />);
  //   const input = screen.getByTestId(TestId.SearchField);
  //   act(() => {
  //     userEvent.type(input, SEARCH_FIELD_VALUE);
  //   });
  //   expect(input).toHaveValue(SEARCH_FIELD_VALUE);
  // });
  // it('should save input value to local storage', async () => {
  //   render(
  //     <SearchField
  //       value={SEARCH_FIELD_VALUE}
  //       onClick={async () => {
  //         localStorage.setItem(SEARCH_FIELD_KEY, SEARCH_FIELD_VALUE);
  //       }}
  //       setValue={() => {}}
  //     />,
  //   );
  //   const input = screen.getByTestId(TestId.SearchField);
  //   const button = screen.getByTestId(TestId.SearchFieldBtn);
  //   await act(async () => {
  //     await userEvent.type(input, SEARCH_FIELD_VALUE);
  //     await userEvent.click(button);
  //   });
  //   expect(localStorage.getItem(SEARCH_FIELD_KEY)).toBe(SEARCH_FIELD_VALUE);
  // });
  // it('should set value from local storage', () => {
  //   localStorage.setItem(SEARCH_FIELD_KEY, SEARCH_FIELD_VALUE);
  //   render(<SearchField value={SEARCH_FIELD_VALUE} onClick={async () => {}} setValue={() => {}} />);
  //   const input = screen.getByTestId(TestId.SearchField);
  //   expect(input).toHaveValue(SEARCH_FIELD_VALUE);
  // });
});
