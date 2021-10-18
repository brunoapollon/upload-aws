import { Request, Response } from 'express';
import { File } from '@models/File';
import aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

class FileController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    if (!file) throw new Error('missing file');

    try {
      const fileCreated = await File.create({
        name: file?.originalname,
        size: file?.size,
        key: file?.key,
        url: file?.location,
      });

      return response.json(fileCreated);
    } catch (err) {
      throw new Error('file creation failed');
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const files = await File.find();

      return response.json(files);
    } catch (err) {
      throw new Error('failed to list all files');
    }
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { file_id } = request.params;

      const file = await File.findById(file_id);

      if (!file) throw new Error('file does not exist');

      const s3 = new aws.S3();

      if (process.env.STORAGE_TYPE === 's3')
        s3.deleteObject({ Bucket: 'upload-aws', Key: file.key }).promise();
      else
        promisify(fs.unlink)(
          path.resolve(__dirname, '..', '..', 'temp', 'uploads', file.key),
        );

      file.remove();

      return response.json({ message: 'Delete successfully' });
    } catch (err) {
      throw new Error('failed to delete faile');
    }
  }
}

export { FileController };
