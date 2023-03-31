import { TestId } from 'enum/TestId';
import React, { FC } from 'react';
import styles from './ErrorMessageWrapper.module.scss';

interface IErrorMessageWrapperProps {
  children: React.ReactElement | React.ReactNode;
  errorMessage?: string;
}

const ErrorMessageWrapper: FC<IErrorMessageWrapperProps> = ({ children, errorMessage }) => {
  return (
    <div className={styles.messageWrapper}>
      {children}
      {!!errorMessage && (
        <p data-testid={TestId.ErrorMessage} className={styles.message}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default ErrorMessageWrapper;
