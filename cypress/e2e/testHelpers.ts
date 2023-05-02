export const getByTestIdHelper = <T>(testId: string) => cy.get<T>(`[data-testid=${testId}`);
