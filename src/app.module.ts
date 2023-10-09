import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles/entities/articles.entities';
import { ArticleModule } from './articles/article.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT) || 3000,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        entities: [Article],
        synchronize: true,
        logging: true,
      }),
    }),
    ArticleModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
