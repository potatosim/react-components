import { render, screen } from '@testing-library/react';
import { TestId } from 'enum/TestId';
import AboutPage from 'pages/AboutPage/AboutPage';
import { MemoryRouter } from 'react-router-dom';

describe('AboutPage', () => {
  it('should render AboutPage', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );
    const imageWrapper = screen.getByTestId(TestId.ImageAbout);
    const textAbout = screen.getByTestId(TestId.TextAbout);
    [imageWrapper, textAbout].forEach((element) => expect(element).toBeInTheDocument());
  });
});
