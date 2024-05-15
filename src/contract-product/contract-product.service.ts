import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ContractProduct, } from "./contract-product.entity";

@Injectable()
export class ContractProductService extends TypeOrmCrudService<ContractProduct> {
  constructor(@InjectRepository(ContractProduct) repo) {
    super(repo);
  }

  async deleteAllForContractId(contractId) {
    if(!contractId || contractId <= -1) {
      throw new Error("you must provide an valid contract id in deleteAllForContractId");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(ContractProduct)
    .where("contractId = :id", { id: contractId })
    .execute();
  }
}