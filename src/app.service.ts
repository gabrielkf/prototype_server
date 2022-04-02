import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Get';
  }

  postHello(): string {
    return 'Post';
  }

  patchHello(): string {
    return 'Post';
  }

  deleteHello(): string {
    return 'Post';
  }
}
