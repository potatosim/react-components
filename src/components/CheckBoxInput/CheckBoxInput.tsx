import React, { Component } from 'react';
import styles from './CheckBoxInput.module.scss';

interface CheckBoxInputProps {
  checkInput: React.RefObject<HTMLInputElement>;
}

export default class CheckBoxInput extends Component<CheckBoxInputProps> {
  constructor(props: CheckBoxInputProps) {
    super(props);
  }
  render() {
    const { checkInput } = this.props;
    return (
      <div className={styles.inputWrapper}>
        <label>
          <input ref={checkInput} type="checkbox" />I agree to post my info
        </label>
      </div>
    );
  }
}
