import { TestId } from 'enum/TestId';
import React, { Component } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
}

export default class Modal extends Component<IModalProps> {
  constructor(props: IModalProps) {
    super(props);
  }
  render() {
    const { isModalOpen, closeModal } = this.props;

    if (!isModalOpen) {
      return null;
    }

    return (
      <div onClick={closeModal} className={styles.modal}>
        <div
          data-testid={TestId.ModalContent}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            event.stopPropagation();
          }}
          className={styles.modalContent}
        >
          <h2 data-testid={TestId.Modal}>Your data were successfully submitted</h2>
          <button
            data-testid={TestId.CloseModalBtn}
            className={styles.closeBtn}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}
