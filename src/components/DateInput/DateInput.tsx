import { TestId } from 'enum/TestId';
import React, { Component } from 'react';
import styles from './DateInput.module.scss';

interface IDateInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

export default class DateInput extends Component<IDateInputProps> {
  constructor(props: IDateInputProps) {
    super(props);
  }
  render() {
    const { inputRef } = this.props;
    return (
      <div className={styles.inputWrapper}>
        <label>Birthday:</label>
        <input data-testid={TestId.FormDateInput} ref={inputRef} type="date" />
      </div>
    );
  }
}
