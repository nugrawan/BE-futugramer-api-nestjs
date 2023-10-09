import { ArticleService } from '../../services/article/article.service';
import {
  ArticleDto,
  AddArticleDto,
  EditArticleDto,
} from '../../dtos/article.dto';

import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Body,
  Delete,
} from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  public constructor(private readonly articleService: ArticleService) {}

  @Get()
  public findAll(): Promise<ArticleDto[]> {
    return this.articleService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: number): Promise<ArticleDto> {
    return this.articleService.findOne(id);
  }

  @Put(':id')
  public edit(
    @Param('id') id: number,
    @Body() article: EditArticleDto,
  ): Promise<ArticleDto> {
    return this.articleService.edit(id, article);
  }

  @Post()
  public add(@Body() article: AddArticleDto): Promise<ArticleDto> {
    return this.articleService.add(article);
  }

  @Delete(':id')
  public remove(@Param('id') id: number): Promise<ArticleDto> {
    return this.articleService.remove(id);
  }
}
