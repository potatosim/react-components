import { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setSearchValue } from 'handlers/searchSlice';
import { TestId } from 'enum/TestId';

import styles from './SearchField.module.scss';

interface SearchFieldProps {
  onSubmit: (value: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ onSubmit }) => {
  const { searchValue } = useAppSelector((state) => state.search);

  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const handleSubmit = () => {
    onSubmit(searchValue);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder="Enter character name"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
        data-testid={TestId.SearchField}
      />
      <button
        data-testid={TestId.SearchFieldBtn}
        onClick={handleSubmit}
        title="Search"
        className={styles.button}
      />
    </div>
  );
};

export default SearchField;
