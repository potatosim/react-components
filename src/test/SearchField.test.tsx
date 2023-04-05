import { render, screen } from '@testing-library/react';

import SearchField from 'components/SearchField/SearchField';
import { TestId } from 'enum/TestId';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

const SEARCH_FIELD_KEY = 'searchValue';
const SEARCH_FIELD_VALUE = 'some value';

describe('SearchField', () => {
  // beforeEach(() => {
  //   localStorage.removeItem(SEARCH_FIELD_KEY);
  // });
  // it('should render input', () => {
  //   render(<SearchField />);
  //   const input = screen.getByPlaceholderText('Enter some text');
  //   expect(input).toBeInTheDocument();
  // });
  // it('input should work correctly', () => {
  //   render(<SearchField />);
  //   const input = screen.getByTestId(TestId.SearchField);
  //   act(() => {
  //     userEvent.type(input, SEARCH_FIELD_VALUE);
  //   });
  //   expect(input).toHaveValue(SEARCH_FIELD_VALUE);
  // });
  // it('should save input value to local storage', () => {
  //   const { unmount } = render(<SearchField />);
  //   const input = screen.getByTestId(TestId.SearchField);
  //   act(() => {
  //     userEvent.type(input, SEARCH_FIELD_VALUE);
  //   });
  //   unmount();
  //   expect(localStorage.getItem(SEARCH_FIELD_KEY)).toBe(SEARCH_FIELD_VALUE);
  // });
  // it('should set value from local storage', () => {
  //   localStorage.setItem(SEARCH_FIELD_KEY, SEARCH_FIELD_VALUE);
  //   render(<SearchField />);
  //   const input = screen.getByTestId(TestId.SearchField);
  //   expect(input).toHaveValue(SEARCH_FIELD_VALUE);
  // });
  // it('should save value before page reload', () => {
  //   render(<SearchField />);
  //   const input = screen.getByTestId(TestId.SearchField);
  //   act(() => {
  //     userEvent.type(input, SEARCH_FIELD_VALUE);
  //     window.dispatchEvent(new Event('beforeunload'));
  //   });
  //   expect(localStorage.getItem(SEARCH_FIELD_KEY)).toBe(SEARCH_FIELD_VALUE);
  // });
});
