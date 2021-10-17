import { Router, Request, Response } from 'express';
import multer from 'multer';

import { FileController } from '@controllers/FileController';

import { multerConfig } from '@configs/multer';

const FileRouter = Router();

const fileController = new FileController();

FileRouter.post(
  '/posts',
  multer(multerConfig).single('file'),
  fileController.store,
);

export { FileRouter };
