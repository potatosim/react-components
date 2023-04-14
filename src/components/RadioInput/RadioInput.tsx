import React from 'react';
import { TestId } from 'enum/TestId';

import styles from './RadioInput.module.scss';

const RadioInput = React.forwardRef<
  HTMLInputElement,
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>((props, ref) => {
  return (
    <div className={styles.radioWrapper}>
      <label>
        <input
          data-testid={TestId.FormRadioInput}
          name="radio"
          value="Male"
          ref={ref}
          type="radio"
          {...props}
        />
        Male
      </label>
      <label>
        <input name="radio" value="Female" ref={ref} type="radio" {...props} />
        Female
      </label>
    </div>
  );
});

export default RadioInput;
