import { Router } from 'express';

import { fileRouter } from './routes/file.routes';

const routes = Router();

routes.use('/file', fileRouter);

export { routes };
