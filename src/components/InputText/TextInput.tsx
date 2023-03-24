import { TestId } from 'enum/TestId';
import React, { Component } from 'react';
import styles from './TextInput.module.scss';

interface ITextInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  label: string;
}

export default class TextInput extends Component<ITextInputProps> {
  constructor(props: ITextInputProps) {
    super(props);
  }

  render() {
    const { inputRef, label } = this.props;
    return (
      <div className={styles.inputWrapper}>
        <input data-testid={TestId.FormTextInput} ref={inputRef} type="text" placeholder={label} />
        <label>{label}</label>
      </div>
    );
  }
}
