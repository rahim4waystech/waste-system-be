import { Controller, Delete, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { ContractProduct } from './contract-product.entity';
import { ContractProductService } from './contract-product.service';


@Crud({
    model: {
      type: ContractProduct,
    },
    query: {
      join: {
        product: {
          eager: true
        },
        'product.unit': {
          eager: true,
        }
      }
    }
  })
  @Feature('contract-product')
  @Controller('contract-product')
export class ContractProductController implements CrudController<ContractProduct>{

    constructor(public service: ContractProductService) {}


    @Delete('deleteAllByContractId/:contractId')
    deleteAllByOrderId(@Param() params) {

      if(!params['contractId']) {
        throw new Error('You must supply an id for deleteAllByContractId');
      }

      this.service.deleteAllForContractId(params['contractId']);
      return [];
    }

}
