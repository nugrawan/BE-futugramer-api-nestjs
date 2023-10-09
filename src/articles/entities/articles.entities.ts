import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public description: string;
  @Column()
  public title: string;
  @Column()
  public imageLink: string;

  public constructor(title: string, description: string, imageLink: string) {
    this.title = title;
    this.description = description;
    this.imageLink = imageLink;
  }
}
