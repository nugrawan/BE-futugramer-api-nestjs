import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/articles.entities';
import { ArticleController } from '../articles/controllers/article/article.controller';
import { ArticleService } from '../articles/services/article/article.service';
import { ArticleMapperService } from '../articles/services/articles-mapper/articles-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService, ArticleMapperService],
  controllers: [ArticleController],
})
export class ArticleModule {}
