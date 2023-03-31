import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form/Form';
import { TestId } from 'enum/TestId';
import { act } from 'react-dom/test-utils';

describe('Form', () => {
  beforeEach(() => {
    URL.createObjectURL = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should change IsModalOpen', async () => {
    const addCard = jest.fn();
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

    const modalBtn = await screen.findByTestId(TestId.CloseModalBtn);

    await act(async () => {
      userEvent.click(modalBtn);
    });

    expect(modalBtn).not.toBeInTheDocument();
  });
});
