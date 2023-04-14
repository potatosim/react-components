import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Modal from 'components/Modal';
import { TestId } from 'enum/TestId';

describe('Modal', () => {
  it('not close Modal', async () => {
    const closeModal = jest.fn();
    Event.prototype.stopPropagation = jest.fn();
    render(<Modal closeModal={closeModal} />);
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
    render(<Modal closeModal={closeModal} />);
    const modalContent = screen.getByTestId(TestId.ModalContent);
    act(() => {
      userEvent.click(modalContent);
    });
    expect(ev.stopPropagation).toHaveBeenCalled();
  });
});
