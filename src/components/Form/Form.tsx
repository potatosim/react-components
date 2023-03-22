import CheckBoxInput from 'components/CheckBoxInput/CheckBoxInput';
import DateInput from 'components/DateInput/DateInput';
import TextInput from 'components/InputText/TextInput';
import RadioInput from 'components/RadioInput/RadioInput';
import Select from 'components/Select/Select';
import React, { Component, createRef } from 'react';
import { IFormCard } from 'types/IFormCard';
import styles from './Form.module.css';

interface IFormProps {
  addCard: (card: IFormCard) => void;
}

export default class Form extends Component<IFormProps> {
  textInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  checkInput: React.RefObject<HTMLInputElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  state: { image: string };

  constructor(props: IFormProps) {
    super(props);
    this.textInput = createRef();
    this.dateInput = createRef();
    this.checkInput = createRef();
    this.maleRef = createRef();
    this.femaleRef = createRef();
    this.selectRef = createRef();
    this.fileInput = createRef();
    this.state = { image: '' };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.props.addCard({
      birthday: this.dateInput.current!.value,
      checkbox: this.checkInput.current!.checked,
      image: URL.createObjectURL(this.fileInput!.current!.files![0] || ''),
      name: this.textInput.current!.value,
      radio: this.femaleRef.current?.checked
        ? this.femaleRef.current!.value
        : this.maleRef.current!.value,
      selected: 'asd',
    });

    event.currentTarget.reset();
    console.log(this.femaleRef.current?.checked);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <TextInput inputRef={this.textInput} label="Name" />
        <DateInput inputRef={this.dateInput} />
        <Select selectRef={this.selectRef} />
        <CheckBoxInput checkInput={this.checkInput} />
        <RadioInput maleRef={this.maleRef} femaleRef={this.femaleRef} />
        <input ref={this.fileInput} type="file" />
        <button>Submit</button>
      </form>
    );
  }
}
