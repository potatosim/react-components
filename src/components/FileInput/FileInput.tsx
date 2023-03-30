import { TestId } from 'enum/TestId';
import React from 'react';
import styles from './FileInput.module.scss';

const FileInput = React.forwardRef<
  HTMLInputElement,
  { isFileUpload: boolean; setIsFileUpload: (value: boolean) => void } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>(({ isFileUpload, setIsFileUpload, onChange, ...props }, ref) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFileUpload(!!event.target.files?.length);
    onChange?.(event);
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={isFileUpload ? styles.uploadLabel : ''}>
        <input
          ref={ref}
          data-testid={TestId.FormFileInput}
          type="file"
          onChange={handleFileUpload}
          accept="jpg"
          multiple={false}
          {...props}
        />
        Upload Image
      </label>
    </div>
  );
});

export default FileInput;
