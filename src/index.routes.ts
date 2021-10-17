import { Router } from 'express';

import { FileRouter } from './routes/file.routes';

const routes = Router();

routes.use('/file', FileRouter);

export { routes };
