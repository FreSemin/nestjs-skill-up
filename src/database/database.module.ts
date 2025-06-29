import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from 'common/configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRootAsync({ useClass: TypeORMConfig })],
})
export class DatabaseModule {}
