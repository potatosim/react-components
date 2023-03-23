export type InputValidation = { isValid: boolean; message?: string };

export type FormValidationState = {
  isTextInputValid: InputValidation;
  isDateInputValid: InputValidation;
  isCheckInputValid: InputValidation;
  isSelectValid: InputValidation;
  isFileInputValid: InputValidation;
  isRadioInputValid: InputValidation;
};

export const validateForm = ({
  textInput,
  checkInput,
  dateInput,
  fileInput,
  selectRef,
  maleRef,
  femaleRef,
}: {
  textInput: HTMLInputElement;
  dateInput: HTMLInputElement;
  checkInput: HTMLInputElement;
  selectRef: HTMLSelectElement;
  fileInput: HTMLInputElement;
  maleRef: HTMLInputElement;
  femaleRef: HTMLInputElement;
}): FormValidationState => {
  const result: FormValidationState = {
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
  };
  const isTextInputValid = !!textInput.value.trim().length;
  const isDateInputValid = Date.now() > new Date(dateInput.value).getTime();
  const isCheckInputValid = !!checkInput.checked;
  const isSelectValid = selectRef.value !== 'Select your country';
  const isFileInputValid = fileInput.files && fileInput.files[0];
  const isRadioInputValid = maleRef.checked || femaleRef.checked;

  if (!isTextInputValid) {
    result.isTextInputValid = { isValid: false, message: 'Incorrect Value' };
  }

  if (!isDateInputValid) {
    result.isDateInputValid = { isValid: false, message: 'Incorrect Date' };
  }

  if (!isCheckInputValid) {
    result.isCheckInputValid = { isValid: false, message: 'Required' };
  }

  if (!isSelectValid) {
    result.isSelectValid = { isValid: false, message: 'Choose one option' };
  }

  if (!isFileInputValid) {
    result.isFileInputValid = { isValid: false, message: 'Upload an image' };
  }

  if (!isRadioInputValid) {
    result.isRadioInputValid = { isValid: false, message: 'Choose one option' };
  }
  return result;
};
