import { TestId } from 'enum/TestId';
import React from 'react';
import styles from './TextInput.module.scss';

interface ITextInputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

const TextInput = React.forwardRef<HTMLInputElement, ITextInputProps>(({ label, ...rest }, ref) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        data-testid={TestId.FormTextInput}
        type="text"
        placeholder={label}
        ref={ref}
        {...rest}
      />
      <label>{label}</label>
    </div>
  );
});

// const TextInput: FC<ITextInputProps> = ({ label }) => {
//   return (
//     <div className={styles.inputWrapper}>
//       <input data-testid={TestId.FormTextInput} type="text" placeholder={label} />
//       <label>{label}</label>
//     </div>
//   );
// };

export default TextInput;
