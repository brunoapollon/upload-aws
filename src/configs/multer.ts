import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const multerConfig = {
  dest: path.resolve(__dirname, '..', '..', 'temp', 'uploads'),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'));
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err, '');

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        callback(null, fileName);
      });
    },
  }),
};

export { multerConfig };
