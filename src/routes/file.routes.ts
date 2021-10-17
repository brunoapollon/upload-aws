import { Router, Request, Response } from 'express';
import multer from 'multer';

import { FileController } from '@controllers/FileController';

import { multerConfig } from '@configs/multer';

const fileRouter = Router();

const fileController = new FileController();

fileRouter.post(
  '/posts',
  multer(multerConfig).single('file'),
  fileController.store,
);

fileRouter.get('/listAll', fileController.index);

export { fileRouter };
