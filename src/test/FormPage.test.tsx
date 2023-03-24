import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestId } from 'enum/TestId';
import FormPage from 'pages/FormPage/FormPage';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

describe('FormPage', () => {
  beforeEach(() => {
    URL.createObjectURL = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render FormPage', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>,
    );
    const formButton = screen.getByTestId(TestId.FormBtn);
    const formPageWrapper = screen.getByTestId(TestId.FormPageWrapper);
    [formButton, formPageWrapper].forEach((element) => expect(element).toBeInTheDocument());
  });

  it('should add form-cards to FormPage', async () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>,
    );
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

      userEvent.click(formButton);
    });

    const cardTitle = await screen.findByTestId(TestId.FormCardItem);
    expect(cardTitle).toBeInTheDocument();
  });
});
