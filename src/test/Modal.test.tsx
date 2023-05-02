import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Modal from 'components/Modal';
import { TestId } from 'enum/TestId';
import { vi } from 'vitest';

describe('Modal', () => {
  it('not close Modal', async () => {
    const closeModal = vi.fn();
    Event.prototype.stopPropagation = vi.fn();
    render(<Modal closeModal={closeModal} />);
    const modalContent = screen.getByTestId(TestId.ModalContent);
    await act(() => {
      userEvent.click(modalContent);
    });
    expect(closeModal).not.toHaveBeenCalled();
  });
  it('should call stopPropagation', () => {
    const ev = new Event('click');
    vi.spyOn(ev, 'stopPropagation');
    const closeModal = vi.fn();
    Event.prototype.stopPropagation = vi.fn();
    render(<Modal closeModal={closeModal} />);
    const modalContent = screen.getByTestId(TestId.ModalContent);
    act(() => {
      userEvent.click(modalContent);
    });
    expect(ev.stopPropagation).not.toHaveBeenCalled();
  });
});
