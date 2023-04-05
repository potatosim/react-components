import { ChangeEvent, FC, useEffect, useRef } from 'react';

import { TestId } from 'enum/TestId';
import styles from './SearchField.module.scss';

interface SearchFieldProps {
  value: string;
  setValue: (value: string) => void;
  onClick: () => Promise<void>;
}

const SearchField: FC<SearchFieldProps> = ({ setValue, value, onClick }) => {
  const inputValue = useRef<string>('');

  useEffect(() => {
    setValueFromLocalStorage();
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', saveValueToLocalStorage);

    return () => {
      saveValueToLocalStorage();
      window.removeEventListener('beforeunload', saveValueToLocalStorage);
    };
  }, []);

  useEffect(() => {
    inputValue.current = value;
  }, [value]);

  const saveValueToLocalStorage = () => {
    localStorage.setItem('searchValue', inputValue.current);
  };

  const setValueFromLocalStorage = () => {
    const valueFromStorage = localStorage.getItem('searchValue');
    if (valueFromStorage) {
      setValue(valueFromStorage);
    }
  };

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
        data-testid={TestId.SearchField}
      />
      <button onClick={onClick} title="Search" className={styles.button} />
    </div>
  );
};

export default SearchField;
