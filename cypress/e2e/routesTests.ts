import { getByTestIdHelper } from './testHelpers';

export const routesTests = () => {
  describe('routing should work correctly', () => {
    it('should render HomePage', () => {
      const title = getByTestIdHelper('header-title');

      title.should('have.text', 'Home Page');
    });

    it('should go to AboutPage', () => {
      const aboutBtn = getByTestIdHelper('about-page-link');

      aboutBtn.click();

      const title = getByTestIdHelper('header-title');

      title.should('have.text', 'About Page');
    });

    it('should go to FormPage', () => {
      const formBtn = getByTestIdHelper('form-page-link');

      formBtn.click();

      const title = getByTestIdHelper('header-title');

      title.should('have.text', 'Form');
    });

    it('should go to NotFoundPage', () => {
      cy.visit('http://localhost:3000/123');

      cy.get('button').contains('Go back to Home').should('exist');
    });

    it('should return to HomePage', () => {
      cy.visit('http://localhost:3000/123');

      const goBackBtn = cy.get('button').contains('Go back to Home');

      goBackBtn.click();

      const title = getByTestIdHelper('header-title');

      title.should('have.text', 'Home Page');
    });
  });
};
