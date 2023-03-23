import CheckBoxInput from 'components/CheckBoxInput/CheckBoxInput';
import DateInput from 'components/DateInput/DateInput';
import ErrorMessageWrapper from 'components/ErrorMessageWrapper/ErrorMessageWrapper';
import FileInput from 'components/FileInput/FileInput';
import TextInput from 'components/InputText/TextInput';
import RadioInput from 'components/RadioInput/RadioInput';
import Select from 'components/Select/Select';
import React, { Component, createRef } from 'react';
import { IFormCard } from 'types/IFormCard';
import { FormValidationState, validateForm } from 'utils/formValidation';
import styles from './Form.module.scss';

interface IFormProps {
  addCard: (card: IFormCard) => void;
}

export default class Form extends Component<IFormProps> {
  formRef: React.RefObject<HTMLFormElement>;
  textInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  checkInput: React.RefObject<HTMLInputElement>;
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  selectRef: React.RefObject<HTMLSelectElement>;
  fileInput: React.RefObject<HTMLInputElement>;
  state: {
    image: string;
    validation: FormValidationState;
  };

  constructor(props: IFormProps) {
    super(props);
    this.formRef = createRef();
    this.textInput = createRef();
    this.dateInput = createRef();
    this.checkInput = createRef();
    this.maleRef = createRef();
    this.femaleRef = createRef();
    this.selectRef = createRef();
    this.fileInput = createRef();
    this.state = {
      image: '',
      validation: {
        isTextInputValid: {
          isValid: true,
        },
        isDateInputValid: {
          isValid: true,
        },
        isCheckInputValid: {
          isValid: true,
        },
        isSelectValid: {
          isValid: true,
        },
        isFileInputValid: {
          isValid: true,
        },
        isRadioInputValid: {
          isValid: true,
        },
      },
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      this.formRef.current &&
      this.textInput.current &&
      this.dateInput.current &&
      this.checkInput.current &&
      this.maleRef.current &&
      this.femaleRef.current &&
      this.selectRef.current &&
      this.fileInput.current
    ) {
      const isFormValid = validateForm({
        checkInput: this.checkInput.current,
        dateInput: this.dateInput.current,
        fileInput: this.fileInput.current,
        selectRef: this.selectRef.current,
        textInput: this.textInput.current,
        maleRef: this.maleRef.current,
        femaleRef: this.femaleRef.current,
      });
      this.setState({ validation: isFormValid });
      const isAllFieldsValid = Object.values(isFormValid).every(({ isValid }) => isValid === true);
      if (isAllFieldsValid) {
        this.props.addCard({
          birthday: this.dateInput.current.value,
          checkbox: this.checkInput.current.checked,
          image: URL.createObjectURL(this.fileInput.current.files![0] || ''),
          name: this.textInput.current.value,
          radio: this.femaleRef.current.checked
            ? this.femaleRef.current.value
            : this.maleRef.current.value,
          selected: this.selectRef.current.value,
        });
        this.formRef.current?.reset();
      }
    }
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.handleSubmit} className={styles.form}>
        <ErrorMessageWrapper errorMessage={this.state.validation.isTextInputValid.message}>
          <TextInput inputRef={this.textInput} label="Name" />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={this.state.validation.isDateInputValid.message}>
          <DateInput inputRef={this.dateInput} />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={this.state.validation.isSelectValid.message}>
          <Select selectRef={this.selectRef} />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={this.state.validation.isCheckInputValid.message}>
          <CheckBoxInput checkInput={this.checkInput} />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={this.state.validation.isRadioInputValid.message}>
          <RadioInput maleRef={this.maleRef} femaleRef={this.femaleRef} />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={this.state.validation.isFileInputValid.message}>
          <FileInput fileInput={this.fileInput} />
        </ErrorMessageWrapper>
        <button className={styles.button}>Submit</button>
      </form>
    );
  }
}
