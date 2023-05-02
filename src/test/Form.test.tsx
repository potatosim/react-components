import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Form from 'components/Form';
import { TestId } from 'enum/TestId';
import { vi } from 'vitest';

describe('Form', () => {
  beforeEach(() => {
    URL.createObjectURL = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
  it('should change IsModalOpen', async () => {
    const addCard = vi.fn();
    render(<Form addCard={addCard} />);

    const textInput = screen.getByTestId(TestId.FormTextInput);
    const dateInput = screen.getByTestId(TestId.FormDateInput);
    const select = screen.getByTestId(TestId.FormSelect);
    const checkbox = screen.getByTestId(TestId.FormCheckbox);
    const radioInput = screen.getByTestId(TestId.FormRadioInput);
    const fileInput = screen.getByTestId(TestId.FormFileInput);
    const formButton = screen.getByTestId(TestId.FormBtn);
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    await act(async () => {
      userEvent.type(textInput, 'Hanna');
      userEvent.type(dateInput, '2011-11-11');
      userEvent.click(checkbox);
      userEvent.selectOptions(select, 'Belarus');
      userEvent.click(radioInput);
      userEvent.upload(fileInput, file);
      Object.defineProperty(fileInput, 'value', { value: 'test' });

      userEvent.click(formButton);
    });

    const modalText = await screen.findByTestId(TestId.Modal);
    const modalBgc = await screen.findByTestId(TestId.ModalBackground);

    await act(async () => {
      userEvent.click(modalBgc);
    });

    expect(modalText).not.toBeInTheDocument();
  });
});
