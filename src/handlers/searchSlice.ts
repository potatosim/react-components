import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SearchInitial {
  searchValue: string;
}

const initialState: SearchInitial = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
