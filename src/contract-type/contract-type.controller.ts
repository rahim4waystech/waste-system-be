import { ContractType } from "./contract-type.entity";
import { ContractTypeService } from "./contract-type.service";
import { Crud, Feature, CrudController } from "@nestjsx/crud";
import { Controller } from "@nestjs/common";

@Crud({
    model: {
      type: ContractType,
    },
  })
  @Feature('contract-type')
  @Controller('contract-type')
export class ContractTypeController implements CrudController<ContractType>{

    constructor(public service: ContractTypeService) {}

}