import { ChangeEvent, FC } from 'react';

import { TestId } from 'enum/TestId';
import styles from './SearchField.module.scss';

interface SearchFieldProps {
  value: string;
  setValue: (value: string) => void;
  onClick: () => Promise<void>;
}

const SearchField: FC<SearchFieldProps> = ({ setValue, value, onClick }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder="Enter character name"
        value={value}
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            onClick();
          }
        }}
        data-testid={TestId.SearchField}
      />
      <button
        data-testid={TestId.SearchFieldBtn}
        onClick={onClick}
        title="Search"
        className={styles.button}
      />
    </div>
  );
};

export default SearchField;
