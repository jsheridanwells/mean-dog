import * as express from 'express';
import * as path from 'path';
import { Express } from 'express';
import * as livereload from 'livereload';
import * as connectLivereload from 'connect-livereload';


export default function createApp(): Express {
  const app = express();
  let livereloadServer;
  if (process.env.NODE_ENV !== 'production') {
    livereloadServer = livereload.createServer();

    livereloadServer.watch(path.join(__dirname, '../public'));
    app.use(connectLivereload());
    livereloadServer.once('connection', () => {
      setTimeout(() => livereloadServer.refresh('/'), 100);
    });
  }

  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/api', (req, res) => res.send(`api works :)`));
  return app;
}
