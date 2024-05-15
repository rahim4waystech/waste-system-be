import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Sepa } from "./sepa.entity";

@Injectable()
export class SepaService extends TypeOrmCrudService<Sepa> {
  constructor(@InjectRepository(Sepa) repo) {
    super(repo);
  }
}
