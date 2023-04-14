import React from 'react';
import { TestId } from 'enum/TestId';

import styles from './DateInput.module.scss';

const DateInput = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((inputProps, ref) => {
  return (
    <div className={styles.inputWrapper}>
      <label>Birthday:</label>
      <input data-testid={TestId.FormDateInput} type="date" ref={ref} {...inputProps} />
    </div>
  );
});

export default DateInput;
