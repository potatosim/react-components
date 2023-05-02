import { getByTestIdHelper } from './testHelpers';

export const formPageTests = () => {
  describe('form page should work correctly', () => {
    beforeEach(() => {
      cy.visit('/form');
    });

    it('should render form on FormPage', () => {
      const textInput = getByTestIdHelper('form-text-input');

      textInput.should('have.value', '');
    });

    it('should create a formCard', () => {
      const textInput = getByTestIdHelper('form-text-input');
      const dateInput = getByTestIdHelper('form-date-input');
      const select = getByTestIdHelper('form-select');
      const radioInput = getByTestIdHelper('form-radio-input');
      const checkboxInput = getByTestIdHelper('form-checkbox');
      const fileInput = getByTestIdHelper('form-file-input');
      const formButton = getByTestIdHelper('form-btn');

      textInput.type('Hanna');
      dateInput.type('2011-11-11');
      select.select('Belarus');
      radioInput.check();
      checkboxInput.check();
      fileInput.selectFile({
        fileName: 'users.json',
        contents: [{ name: 'John Doe' }],
      });

      formButton.click().then(() => {
        getByTestIdHelper('modal-background').should('exist');

        getByTestIdHelper('modal-background').click('left');

        getByTestIdHelper('modal-background').should('not.exist');
      });

      getByTestIdHelper('form-card-name').should('have.text', 'Hanna');
    });

    it('should be validation error', () => {
      const textInput = getByTestIdHelper('form-text-input');
      const dateInput = getByTestIdHelper('form-date-input');
      const radioInput = getByTestIdHelper('form-radio-input');
      const checkboxInput = getByTestIdHelper('form-checkbox');
      const fileInput = getByTestIdHelper('form-file-input');
      const formButton = getByTestIdHelper('form-btn');

      textInput.type(' ');
      dateInput.type('2024-11-11');
      radioInput.check();
      checkboxInput.check();
      fileInput.selectFile({
        fileName: 'users.json',
        contents: [{ name: 'John Doe' }],
      });
      formButton.click();

      getByTestIdHelper('error-message').should('be.visible');
    });
  });
};
