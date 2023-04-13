import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFormCard } from 'components/FormCardItem';

interface FormInitial {
  formCards: IFormCard[];
}

const initialState: FormInitial = {
  formCards: [],
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    addNewCard: (state, { payload }: PayloadAction<IFormCard>) => {
      state.formCards = [...state.formCards, payload];
    },
  },
});

export const { addNewCard } = formSlice.actions;

export default formSlice.reducer;
