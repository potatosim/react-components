import React from 'react';
import { TestId } from 'enum/TestId';

import styles from './Select.module.scss';

const Select = React.forwardRef<
  HTMLSelectElement,
  React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
>((selectProps, ref) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        data-testid={TestId.FormSelect}
        defaultValue={'Select your country'}
        ref={ref}
        {...selectProps}
      >
        <option value="Select your country" disabled>
          Select your country
        </option>
        <option value="Belarus">Belarus</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Poland">Poland</option>
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="Russia">Russia</option>
        <option value="Another">Another country</option>
      </select>
    </div>
  );
});

export default Select;
