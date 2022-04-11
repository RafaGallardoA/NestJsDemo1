import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getData(): string[] {
    const array = ['a', 'b', 'c'];
    return array;
  }
}
