import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('return data function', () => {
    it('should return array data', () => {
      const expectedResult = ['a', 'b', 'c'];
      expect(appService.getData()).toEqual(expectedResult);
    });
  });
});
