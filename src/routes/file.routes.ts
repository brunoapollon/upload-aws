import { Router, Request, Response } from 'express';
import multer from 'multer';

import { multerConfig } from '@configs/multer';

const FileRouter = Router();

FileRouter.post(
  '/posts',
  multer(multerConfig).single('file'),
  (request: Request, response: Response) => {
    console.log(request.file);
    return response.json({ message: 'hello' });
  },
);

export { FileRouter };
