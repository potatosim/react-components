import React from 'react';
import { TestId } from 'enum/TestId';

import styles from './CheckBoxInput.module.scss';

const CheckBoxInput = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => {
  return (
    <div className={styles.inputWrapper}>
      <label>
        <input data-testid={TestId.FormCheckbox} ref={ref} type="checkbox" {...props} />I agree to
        post my info
      </label>
    </div>
  );
});

export default CheckBoxInput;
