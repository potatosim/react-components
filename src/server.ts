import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const html = template.split('<!--ssr-outlet-->');
      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
      const stream: PipeableStream = render(
        req.url as string,
        {
          onShellReady() {
            res.write(html[0]);
            stream.pipe(res);
          },
          onAllReady() {
            res.write(html[0] + html[1]);
            res.end();
          },
        } as RenderToPipeableStreamOptions,
      );
    } catch (e) {
      const error = e as Error;

      vite.ssrFixStacktrace(error);
      next(error);
    }
  });

  app.listen(3000, () => {
    /* eslint-disable-next-line no-console */
    console.log('Server is running on http://localhost:3000');
  });
}

createServer();
