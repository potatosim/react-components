import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckBoxInput from 'components/CheckBoxInput';
import DateInput from 'components/DateInput';
import ErrorMessageWrapper from 'components/ErrorMessageWrapper';
import FileInput from 'components/FileInput';
import TextInput from 'components/InputText';
import Modal from 'components/Modal';
import RadioInput from 'components/RadioInput';
import Select from 'components/Select';
import { TestId } from 'enum/TestId';
import { IFormCard } from 'components/FormCardItem';
import Portal from 'components/Portal';

import styles from './Form.module.scss';

interface IFormProps {
  addCard: (card: IFormCard) => void;
}

interface IFormValues {
  name: string;
  date: string;
  check: boolean;
  sex: string;
  country: string;
  image: FileList;
}

const Form: FC<IFormProps> = ({ addCard }) => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({ mode: 'onSubmit' });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFileUpload, setIsFileUpload] = useState<boolean>(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<IFormValues> = () => {
    const image = getValues('image');
    addCard({
      birthday: getValues('date'),
      image: URL.createObjectURL(image[0]),
      name: getValues('name'),
      radio: getValues('sex'),
      selected: getValues('country'),
    });

    setIsModalOpen(true);

    setIsFileUpload(false);
    reset();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <ErrorMessageWrapper errorMessage={errors.name && errors.name.message}>
          <TextInput
            label="Name"
            {...register('name', {
              minLength: {
                value: 3,
                message: 'Incorrect Length',
              },
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={errors.date && errors.date.message}>
          <DateInput
            {...register('date', {
              required: {
                value: true,
                message: 'This field is required',
              },
              validate: (date: string) => {
                if (!(Date.now() > new Date(date).getTime())) {
                  return 'Incorrect Date';
                }
                return true;
              },
            })}
          />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={errors.country && errors.country.message}>
          <Select
            {...register('country', {
              validate: (country) => {
                if (country === 'Select your country') {
                  return 'Choose your country';
                }
                return true;
              },
            })}
          />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={errors.check && errors.check.message}>
          <CheckBoxInput
            {...register('check', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={errors.sex && errors.sex.message}>
          <RadioInput
            {...register('sex', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
        </ErrorMessageWrapper>
        <ErrorMessageWrapper errorMessage={errors.image && errors.image.message}>
          <FileInput
            isFileUpload={isFileUpload}
            setIsFileUpload={setIsFileUpload}
            {...register('image', {
              required: 'Please, upload an image',
            })}
          />
        </ErrorMessageWrapper>
        <button data-testid={TestId.FormBtn} className={styles.button}>
          Submit
        </button>
      </form>
      <Portal condition={!!isModalOpen}>
        <Modal closeModal={handleClose} closeIcon={false}>
          <h2 data-testid={TestId.Modal}>Your data were successfully submitted</h2>
        </Modal>
      </Portal>
    </>
  );
};

export default Form;
