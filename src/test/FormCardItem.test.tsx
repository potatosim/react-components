import { render, screen } from '@testing-library/react';
import FormCardItem from 'components/FormCardItem';

import { TestId } from 'enum/TestId';

describe('FormCardItem', () => {
  const mockFormCardData = {
    name: 'Anna',
    birthday: '11.11.2011',
    selected: 'Belarus',
    checkbox: true,
    radio: 'Female',
    image:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80',
  };
  it('should render form-card-item', () => {
    render(<FormCardItem {...mockFormCardData} />);
    const formCard = screen.getByTestId(TestId.FormCardItem);
    expect(formCard).toBeInTheDocument();
  });

  it('should render form-card elements', () => {
    render(<FormCardItem {...mockFormCardData} />);
    const name = screen.getByTestId(TestId.FormCardName);
    const sex = screen.getByTestId(TestId.FormCardSex);
    const country = screen.getByTestId(TestId.FormCardCountry);
    expect(name).toHaveTextContent(mockFormCardData.name);
    expect(sex).toHaveTextContent(mockFormCardData.radio);
    expect(country).toHaveTextContent(mockFormCardData.selected);
  });
});
