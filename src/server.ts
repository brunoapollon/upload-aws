import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { routes } from './index.routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(3333, () => {
  console.log('server is running on port 3333');
});
