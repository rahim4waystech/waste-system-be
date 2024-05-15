import { Get, Post, Req, Res } from "@nestjs/common";
import { Controller } from "@nestjs/common";
import { Feature } from "@nestjsx/crud";
import { Account } from "src/account/account.entity";
import { AccountService } from "src/account/account.service";

import * as fs from 'fs';
import { Container } from "src/container/container.entity";
import { SpawnSyncOptions } from "child_process";
import { ContainerService } from "src/container/container.service";

@Controller('total-import')
@Feature('total-import')
export class TotalImportController {
  constructor(private accountService: AccountService,
    private containerService: ContainerService) {}

  @Get('sites')
  public async sites() {
    const data = fs.readFileSync(__dirname + '/sites.csv', 'utf8');  
    const rows = data.split('\n');

      for(let i = 0; i < rows.length; i++) {
          const row = rows[i];

          const cols = row.split(',');
          let parentAccount:any = await this.accountService.getAccountByRef(cols[0].trim());
           parentAccount = parentAccount[0];

          const customer = new Account();
          customer.accountRef = cols[0]; //lookup parent ref
          customer.annualRevenue = 0;
          customer.depot = null;
          customer.description = '';
          customer.email = '';
          customer.employees = 0;
          customer.industry = {id: -1} as any;
          customer.industryId = 1;
          customer.isDepot = false;
          customer.isOwn = false;
          customer.isTip = false;
          customer.isactive = true;
          customer.limitEnabled = false;
          customer.logo = '';
          customer.notes = '';
          customer.onStop = false;
          customer.organisationId = -1;
          customer.rating = {id: -1} as any;
          customer.rating_id = -1;
          customer.sepa = {id: -1} as any;
          customer.sepaId = -1;
          customer.sicId = -1;
          customer.source = 'Excel Sheet import';
          customer.type = {id: 13} as any;
          customer.type_id = 13;
          customer.website = '';
          customer.name = parentAccount.name + ' - ' + cols[2];
          customer.shippingAddress1 = cols[2];
          customer.shippingAddress2 = (cols[3] + ' ' + cols[4]).trim();
          customer.shippingCity = cols[5];
          customer.shippingCountry = 'UK';
          customer.shippingPostCode = cols[6];
          customer.billingAddress1 = cols[2];
          customer.billingAddress2 = (cols[3] + ' ' + cols[4]).trim();
          customer.billingCity = cols[5];
          customer.billingCountry = 'UK';
          customer.billingPostCode = cols[6];
          customer.parentId = parentAccount.id;
          customer.contact = cols[11];
          customer.phoneNumber = cols[12];
          customer.poNumber = cols[10];
          customer.createdBy = 1;
          
          await this.accountService.createNewAccount(customer);
         
      }
  }

  
  @Get('containers')
  public async containers() {
    const data = fs.readFileSync(__dirname + '/containers.csv', 'utf8');  
    const rows = data.split('\n');

      for(let i = 0; i < rows.length; i++) {
          const row = rows[i];

          const cols = row.split(',');

          const container = new Container();
          container.name = cols[0].trim();
          container.serialNumber = cols[0].trim();
          container.notes = '';
          container.active = true;
          container.createdBy = 1;
          container.containerLocationId = -1;
          container.containerLocation = {id: -1} as any;
          container.containerGroupId = 1;
          container.containerGroup = {id: 1} as any;
          container.containerTypeId = this.getContainerTypeIdFromName(cols[1].trim());
          container.containerType = {id: container.containerTypeId} as any;
          container.containerSizeTypeId = this.getContainerSizeTypeId(cols[2].trim());
          container.containerSizeType = {id:container.containerSizeTypeId} as any;

          await this.containerService.SaveDTO(container);
      }
  } 

  @Get('customers')
  public async customers() {
    const data = fs.readFileSync(__dirname + '/customers.csv', 'utf8');  
    const rows = data.split('\n');

      for(let i = 0; i < rows.length; i++) {
          const row = rows[i];

          const cols = row.split(',');

          const customer = new Account();
          customer.accountRef = cols[0];
          customer.name = cols[3];
          customer.email = cols[8];  
          customer.annualRevenue = 0;
          customer.billingAddress1 = cols[16];
          customer.billingAddress2 = cols[17] + (cols[18].trim() !== '' ? ' ' + cols[18] : '');
          customer.billingCity = cols[19];
          customer.billingCountry = 'UK';
          customer.billingPostCode = cols[20];
          customer.contact = '';
          customer.description = '';
          customer.employees = 0;
          customer.industry = {id: -1} as any;
          customer.industryId = -1;
          customer.isDepot = false;
          customer.isOwn = false;
          customer.isactive = true;
          customer.limitEnabled = false;
          customer.logo = null;
          customer.notes = '';
          customer.onStop = false;
          customer.organisationId = -1;
          customer.parentId = -1;
          customer.phoneNumber = cols[9];
          customer.poNumber = '';
          customer.rating = {id: -1} as any;
          customer.rating_id = -1;
          customer.sepa = {id: -1} as any;
          customer.sepaId = -1;
          customer.shippingAddress1 = cols[16];
          customer.shippingAddress2 = cols[17] + (cols[18].trim() !== '' ? ' ' + cols[18] : '');;
          customer.shippingCity = cols[19];
          customer.shippingCountry = 'UK';
          customer.shippingPostCode = cols[20];
          customer.sicId = -1;
          customer.source = 'Excel Sheet Import';
          customer.type = {id: 3} as any;
          customer.type_id = 3;
          customer.website = '';
          customer.createdBy = 1;
          const newCustomer = await this.accountService.createNewAccount(customer);

        //   // create default site for all customers
          const site: Account = JSON.parse(JSON.stringify(customer));

          
          site.id = undefined;
          site.parentId = newCustomer.id;
          site.type = {id: 13} as any;
          site.type_id = 13;

          await this.accountService.createNewAccount(site);

      }
  }

  getContainerTypeIdFromName(name: string='') {
      switch(name) {
          case 'Open': 
            return 1;
          case 'Enclosed':
              return 2;
         case 'Crane Skip':
            return 4;
          default:
              return -1; 
      }
  }

  getContainerSizeTypeId(size: string='') {

    // 4 (21),8 (21),14(26),16(27),20(29),30(31),35(32),40(33)
    switch(size) {
        case '4':
            return 21;

        case '8':
            return 23;
        
        case '14':
            return 26;

        case '16':
            return 27;

        case '20':
            return 29;
        
        case '30':
            return 31;

        case '35':
            return 32;

        case '40':
            return 33;
        default:
            return -1;
    }
    }     
}