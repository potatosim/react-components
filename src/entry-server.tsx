import { StrictMode, Suspense } from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import AppRouter from 'routes/AppRouter';
import { store } from 'store/store';

export function render(url: string, opts?: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <StrictMode>
      <Suspense>
        <Provider store={store}>
          <StaticRouter location={url}>
            <AppRouter />
          </StaticRouter>
        </Provider>
      </Suspense>
    </StrictMode>,
    opts,
  );

  return stream;
}

export type RenderType = {
  render: typeof render;
};
