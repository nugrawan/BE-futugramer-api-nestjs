import { Injectable } from '@nestjs/common';
import { Article } from '../../entities/articles.entities';
import { ArticleDto } from '../../dtos/article.dto';

@Injectable()
export class ArticleMapperService {
  public modelToDto({
    id,
    title,
    description,
    imageLink,
  }: Article): ArticleDto {
    return new ArticleDto({ id, title, description, imageLink });
  }
}
