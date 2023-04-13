import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formSlice from 'handlers/formSlice';
import searchSlice from 'handlers/searchSlice';
import { charactersApi } from 'services/charactersApi';

const rootReducer = combineReducers({
  search: searchSlice,
  formCards: formSlice,
  [charactersApi.reducerPath]: charactersApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
