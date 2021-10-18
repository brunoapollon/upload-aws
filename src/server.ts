import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { multerConfig } from '@configs/multer';
import { routes } from './index.routes';
import { handleErrors } from './middlewares/handleErrors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/files', express.static(multerConfig.dest));
app.use(routes);
app.use(handleErrors);

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
