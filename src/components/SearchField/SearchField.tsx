import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { TestId } from 'enum/TestId';
import styles from './SearchField.module.scss';

const SearchField = () => {
  const [value, setValue] = useState<string>('');

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
    <input
      className={styles.input}
      placeholder="Enter some text"
      value={value}
      onChange={handleChange}
      data-testid={TestId.SearchField}
    />
  );
};

export default SearchField;
