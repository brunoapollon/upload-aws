import { Request, Response } from 'express';
import { File } from '@models/File';
import aws from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

class FileController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const fileCreated = await File.create({
      name: file?.originalname,
      size: file?.size,
      key: file?.key,
      url: file?.location,
    });

    return response.json(fileCreated);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const files = await File.find();

    return response.json(files);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { file_id } = request.params;

    const file = await File.findById(file_id);

    const s3 = new aws.S3();

    if (process.env.STORAGE_TYPE === 's3')
      s3.deleteObject({ Bucket: 'upload-aws', Key: file.key }).promise();
    else
      promisify(fs.unlink)(
        path.resolve(__dirname, '..', '..', 'temp', 'uploads', file.key),
      );

    file.remove();

    return response.json({ message: 'Delete successfully' });
  }
}

export { FileController };
