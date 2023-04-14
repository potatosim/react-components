import { render, screen } from '@testing-library/react';
import reducer, { setSearchValue } from 'handlers/searchSlice';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import SearchField from 'components/SearchField';
import { TestId } from 'enum/TestId';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const SEARCH_FIELD_VALUE = 'some value';

describe('SearchField', () => {
  afterEach(() => jest.clearAllMocks());
  it('should render input', () => {
    render(
      <Provider store={store}>
        <SearchField onSubmit={() => {}} />
      </Provider>,
    );
    const input = screen.getByPlaceholderText('Enter character name');
    expect(input).toBeInTheDocument();
  });
  it('input should work correctly', () => {
    render(
      <Provider store={store}>
        <SearchField onSubmit={() => {}} />
      </Provider>,
    );
    const input = screen.getByTestId(TestId.SearchField);
    act(() => {
      userEvent.type(input, SEARCH_FIELD_VALUE);
    });
    expect(input).toHaveValue(SEARCH_FIELD_VALUE);
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({ searchValue: '' });
  });

  it('should handle a new input value ', () => {
    expect(reducer({ searchValue: '' }, setSearchValue(SEARCH_FIELD_VALUE))).toEqual({
      searchValue: SEARCH_FIELD_VALUE,
    });
  });
});
