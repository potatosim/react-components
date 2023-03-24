import { TestId } from 'enum/TestId';
import React, { Component } from 'react';
import styles from './RadioInput.module.scss';

interface RadioInputProps {
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
}

export default class RadioInput extends Component<RadioInputProps> {
  constructor(props: RadioInputProps) {
    super(props);
  }
  render() {
    const { maleRef, femaleRef } = this.props;
    return (
      <div className={styles.radioWrapper}>
        <label>
          <input
            data-testid={TestId.FormRadioInput}
            name="radio"
            value="Male"
            ref={maleRef}
            type="radio"
          />
          Male
        </label>
        <label>
          <input name="radio" value="Female" ref={femaleRef} type="radio" />
          Female
        </label>
      </div>
    );
  }
}
