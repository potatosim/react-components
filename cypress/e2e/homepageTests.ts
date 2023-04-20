import { getByTestIdHelper } from './testHelpers';

export const homepageTests = () => {
  describe('homepage should work correctly', () => {
    it('should render cards on HomePage', () => {
      cy.wait('@getSomeChars').then(() => {
        const cards = getByTestIdHelper('card-item');

        cards.should('have.length', 20);
      });
    });

    it('should render cards by query', () => {
      const input = getByTestIdHelper<HTMLInputElement>('search-field');
      const searchBtn = getByTestIdHelper<HTMLButtonElement>('search-field-btn');

      input.type('rick');
      searchBtn.click();

      cy.wait('@getSomeChars').then(() => {
        const cards = getByTestIdHelper<HTMLHeadingElement>('card-name');

        cards.should('contain.text', 'Rick');
      });
    });

    it('should find cards by enter button', () => {
      const input = getByTestIdHelper<HTMLInputElement>('search-field');

      input.type('rick');
      input.type('{enter}');

      cy.wait('@getSomeChars').then(() => {
        const cards = getByTestIdHelper<HTMLHeadingElement>('card-name');

        cards.should('contain.text', 'Rick');
      });
    });

    it('should open and close CardModal', () => {
      cy.wait('@getSomeChars').then(() => {
        const card = getByTestIdHelper('card-item').first();

        card.click();

        const modal = getByTestIdHelper('modal-content');

        modal.should('exist');

        getByTestIdHelper('close-modal-btn').click();

        modal.should('not.exist');
      });
    });

    it('should save input value', () => {
      const input = getByTestIdHelper<HTMLInputElement>('search-field');

      input.type('rick');
      input.type('{enter}');

      getByTestIdHelper('form-page-link').click();
      getByTestIdHelper('home-page-link').click();

      getByTestIdHelper<HTMLInputElement>('search-field').should('have.value', 'rick');
    });
  });
};
