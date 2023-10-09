import { isNullOrUndefined } from 'util';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../../entities/articles.entities';
import {
  ArticleDto,
  AddArticleDto,
  EditArticleDto,
} from '../../dtos/article.dto';
import { ArticleMapperService } from '../articles-mapper/articles-mapper.service';

@Injectable()
export class ArticleService {
  public constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
    private readonly articleMapper: ArticleMapperService,
  ) {}

  public async findAll(): Promise<ArticleDto[]> {
    const articles = await this.articleRepository.find();
    return articles.map(this.articleMapper.modelToDto);
  }

  public async findOne(id: number): Promise<ArticleDto> {
    const article = await this.articleRepository.findOne({ where: { id } });
    if (isNullOrUndefined(article)) throw new NotFoundException();
    return this.articleMapper.modelToDto(article);
  }

  public async add({
    title,
    description,
    imageLink,
  }: AddArticleDto): Promise<ArticleDto> {
    let article = new Article(title, description, imageLink);
    article = await this.articleRepository.save(article);
    return this.articleMapper.modelToDto(article);
  }

  public async edit(
    id: number,
    { title, description, imageLink }: EditArticleDto,
  ): Promise<ArticleDto> {
    let article = await this.articleRepository.findOne({ where: { id } });

    if (isNullOrUndefined(article)) throw new NotFoundException();

    article.title = title;
    article.description = description;
    article.imageLink = imageLink;

    article = await this.articleRepository.save(article);

    return this.articleMapper.modelToDto(article);
  }

  public async remove(id: number): Promise<Article> {
    let article = await this.articleRepository.findOne({ where: { id } });

    if (isNullOrUndefined(article)) throw new NotFoundException();

    article = await this.articleRepository.remove(article);

    return article;
  }
}
