import { TestId } from 'enum/TestId';
import React, { FC, PropsWithChildren } from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from 'static/icons';

interface IModalProps extends PropsWithChildren {
  closeModal: () => void;
  closeIcon?: boolean;
}

const Modal: FC<IModalProps> = ({ closeModal, children, closeIcon = true }) => {
  return (
    <div data-testid={TestId.ModalBackground} onClick={closeModal} className={styles.modal}>
      <div
        data-testid={TestId.ModalContent}
        onClick={(event: React.MouseEvent<HTMLDivElement>) => {
          event.stopPropagation();
        }}
        className={styles.modalContent}
      >
        {closeIcon && (
          <button
            data-testid={TestId.CloseModalBtn}
            className={styles.closeBtn}
            onClick={closeModal}
          >
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
