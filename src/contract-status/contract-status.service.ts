import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ContractStatus } from "./contract-status.entity";

@Injectable()
export class ContractStatusService extends TypeOrmCrudService<ContractStatus> {
  constructor(@InjectRepository(ContractStatus) repo) {
    super(repo);
  } 
}