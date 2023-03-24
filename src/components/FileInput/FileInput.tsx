import { TestId } from 'enum/TestId';
import React, { Component } from 'react';
import styles from './FileInput.module.scss';

interface IFileInputProps {
  fileInput: React.RefObject<HTMLInputElement>;
}

export default class FileInput extends Component<IFileInputProps> {
  state: { isFileUpload: boolean };

  constructor(props: IFileInputProps) {
    super(props);
    this.state = { isFileUpload: false };
  }

  handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    if (event.target.files?.length) {
      this.setState({ isFileUpload: true });
    } else {
      this.setState({ isFileUpload: false });
    }
  };

  componentDidUpdate() {
    if (
      this.props.fileInput.current &&
      !this.props.fileInput.current.files?.length &&
      this.state.isFileUpload
    ) {
      this.setState({ isFileUpload: false });
    }
  }

  render() {
    const { fileInput } = this.props;
    const { isFileUpload } = this.state;

    return (
      <div className={styles.inputWrapper}>
        <label className={isFileUpload ? styles.uploadLabel : ''}>
          <input
            data-testid={TestId.FormFileInput}
            ref={fileInput}
            type="file"
            onChange={this.handleChangeInput}
            accept="jpg"
          />
          Upload Image
        </label>
      </div>
    );
  }
}
