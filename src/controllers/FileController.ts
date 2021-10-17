import { Request, Response } from 'express';
import { File } from '@models/File';

class FileController {
  public async store(request: Request, response: Response) {
    const { file } = request;

    const fileCreated = await File.create({
      name: file?.originalname,
      size: file?.size,
      key: file?.key,
      url: file?.location,
    });

    return response.json(fileCreated);
  }
}

export { FileController };
