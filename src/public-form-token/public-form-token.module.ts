

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jan 07 2021 16:04:54 GMT+0000 (Greenwich Mean Time)
 */
import { Module } from '@nestjs/common';
import { PublicFormToken } from './public-form-token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicFormTokenService } from './public-form-token.service';
import { PublicFormTokenController } from './public-form-token.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PublicFormToken])],
    providers: [PublicFormTokenService],
    exports: [],
    controllers: [PublicFormTokenController],
  })
  export class PublicFormTokenModule {}

