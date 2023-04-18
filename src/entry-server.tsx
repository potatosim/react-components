import { Suspense } from 'react';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import AppRouter from 'routes/AppRouter';
import { store } from 'store/store';

export function render(url: string, opts?: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <Suspense>
      <Provider store={store}>
        <StaticRouter location={url}>
          <AppRouter />
        </StaticRouter>
      </Provider>
    </Suspense>,
    opts,
  );

  return stream;
}
