import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from 'components/Modal/Modal';
import { TestId } from 'enum/TestId';
import { act } from 'react-dom/test-utils';

describe('Modal', () => {
  it('should render Modal', () => {
    render(<Modal isModalOpen={true} closeModal={() => {}} />);
    const modalText = screen.getByTestId(TestId.Modal);
    expect(modalText).toBeInTheDocument();
  });

  it('not close Modal', async () => {
    const closeModal = jest.fn();
    Event.prototype.stopPropagation = jest.fn();
    render(<Modal isModalOpen={true} closeModal={closeModal} />);
    const modalContent = screen.getByTestId(TestId.ModalContent);

    await act(() => {
      userEvent.click(modalContent);
    });
    expect(closeModal).not.toHaveBeenCalled();
  });

  it('should call stopPropagation', () => {
    const ev = new Event('click');
    jest.spyOn(ev, 'stopPropagation');

    const closeModal = jest.fn();
    Event.prototype.stopPropagation = jest.fn();
    render(<Modal isModalOpen={true} closeModal={closeModal} />);
    const modalContent = screen.getByTestId(TestId.ModalContent);

    act(() => {
      userEvent.click(modalContent);
    });

    expect(ev.stopPropagation).toHaveBeenCalled();
  });
});
