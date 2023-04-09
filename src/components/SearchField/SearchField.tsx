import { ChangeEvent, FC } from 'react';

import { TestId } from 'enum/TestId';
import styles from './SearchField.module.scss';
import { createPortal } from 'react-dom';
import ErrorNotification from 'components/ErrorNotification/ErrorNotification';

interface SearchFieldProps {
  value: string;
  setValue: (value: string) => void;
  onClick: () => Promise<void>;
  isError: boolean;
}

const SearchField: FC<SearchFieldProps> = ({ setValue, value, onClick, isError }) => {
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
        disabled={isError}
        onClick={onClick}
        title="Search"
        className={styles.button}
      />
      {isError &&
        createPortal(
          <ErrorNotification
            mainText="Cannot find characters with such name🥲"
            text="Try another name"
          />,
          document.body,
        )}
    </div>
  );
};

export default SearchField;
