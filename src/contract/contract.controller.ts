
import { Contract } from "./contract.entity";
import { Crud, CrudController, CrudRequestInterceptor, ParsedRequest, CrudRequest, Action, Feature } from "@nestjsx/crud";
import { Controller, UseInterceptors, Post, Param, Body } from "@nestjs/common";
import { ContractService } from "./contract.service";
import { PDFService } from "src/core/pdf.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Dec 31 2020 11:32:01 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: Contract
    },
    query: {
      join: {
        account: {
          eager: true
        },
        contractType: {
          eager: true
        },
        contractStatus: {
          eager: true
        },
        recurrence: {
          eager: true,
        }
      }
    }
  })
  @Controller('contract')
  @Feature('contract')
  export class ContractController implements CrudController<Contract> {
    constructor(public service: ContractService, public pdfService:PDFService) {}

    @UseInterceptors(CrudRequestInterceptor)
    @Feature('contract-pdf')
    @Post('contract-pdf/')
    async contractPdf(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {

      const contract = <Contract>data.contract;

      await this.pdfService.createPDFUsingTemplate('contract', __dirname + '/../../assets/contract/'+ contract.id, {contract: contract});

      return {fileName: '/contract/'+ contract.id + '.pdf'};
    }
  }