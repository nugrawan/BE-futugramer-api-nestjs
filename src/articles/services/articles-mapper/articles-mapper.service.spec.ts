import { Test, TestingModule } from '@nestjs/testing';
import { ArticleMapperService } from './articles-mapper.service';

describe('ArticleMapperService', () => {
  let service: ArticleMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleMapperService],
    }).compile();

    service = module.get<ArticleMapperService>(ArticleMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
