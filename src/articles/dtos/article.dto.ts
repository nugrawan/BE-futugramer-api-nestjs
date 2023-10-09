import { IsNotEmpty, IsString } from 'class-validator';

export class AddArticleDto {
  public readonly title: string;
  public readonly description: string;
  public readonly imageLink: string;

  public constructor(opts?: Partial<AddArticleDto>) {
    Object.assign(this, opts);
  }
}

export class EditArticleDto {
  @IsString()
  @IsNotEmpty()
  public readonly title: string;
  public readonly description: string;
  public readonly imageLink: string;

  public constructor(opts?: Partial<EditArticleDto>) {
    Object.assign(this, opts);
  }
}

export class ArticleDto {
  public readonly id: number;
  public readonly title: string;
  public readonly description: string;
  public readonly imageLink: string;

  public constructor(opts?: Partial<ArticleDto>) {
    Object.assign(this, opts);
  }
}
