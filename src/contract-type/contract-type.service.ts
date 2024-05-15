import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ContractType } from "./contract-type.entity";

@Injectable()
export class ContractTypeService extends TypeOrmCrudService<ContractType> {
  constructor(@InjectRepository(ContractType) repo) {
    super(repo);
  } 
}