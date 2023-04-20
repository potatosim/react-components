import React, { StrictMode, Suspense } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from 'routes/AppRouter';
import { store } from 'store/store';

import './index.scss';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <Suspense>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </StrictMode>,
);
