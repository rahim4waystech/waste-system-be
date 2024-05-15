import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Unit } from './unit.entity';


@Injectable()
export class UnitService extends TypeOrmCrudService<Unit> {
  constructor(@InjectRepository(Unit) repo) {
    super(repo);
  }
}