import { Injectable } from "@nestjs/common";
import { Account } from './account.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contact } from "src/contact/contact.entity";
import { ContactService } from "src/contact/contact.service";

@Injectable()
export class AccountService extends TypeOrmCrudService<Account> {
  constructor(@InjectRepository(Account) repo, private contactService: ContactService) {
    super(repo);
  }

  async createNewAccount(account: Account) {
   return await this.repo.save(account);
  }

  async shredderImport(rows: any[]) {
    for(let i =  1; i < rows.length; i++) {
      const row = rows[i];

      let account = this.mapRowToAccount(this.csvRowToArray(row));
      account.type = {id: 8} as any;
      account.type_id = 8;
      account.parentId = -1;
      account.accountRef = "";
      account.description = "";
      account.sepaId = -1;
      account.industryId = -1;
      account.rating_id = -1;
      account.email = "";
      account.onStop = false;
      account.limitEnabled = false;
      account.createdBy = 1;
      account.organisationId = 1;
      account.sicId = -1;

      // Create first account
     account = await this.createNewAccount(account);

      // const site = JSON.parse(JSON.stringify(account));
      // delete site.id;
      // // Customers
      // site.parentId = account.id;
      // site.type = {id: 13} as any;
      // site.type_id = 13;



      

      // Object.keys(site).forEach((key) => {
      //   if(site[key] === null && typeof site[key] === 'object') {
      //     site[key] = {};
      //   }
      // })

      // await this.createNewAccount(site);

      let contact = this.mapToContact(account, row.split(','));

      contact.createdBy = 1;
      contact.organisationId = 1;
      contact.middleName = "";
      contact.businessPhone = "";
      contact.roleId = "-1";
      contact.fax = "";
      contact.address1 = "";
      contact.address2 = "";
      contact.address3 = "";
      contact.city = "";
      contact.postCode = "";
      contact.companyName = "";
      contact.country = "UK";
      contact.status = 1;

      await this.contactService.createNewContact(contact);
    }
  }

  mapRowToAccount(row: any[]) {
    const account = new Account();

    account.name = row[3];
    account.contact = row[14] + ' ' + row[15];
    account.phoneNumber = row[19];
    account.billingAddress1 = row[4];
    account.billingAddress2 = row[5] + ' ' + row[6];
    account.billingCity = row[8];
    account.billingCountry = "UK";
    account.billingPostCode = row[10];
    account.shippingAddress1 = row[4];
    account.shippingAddress2 = row[5] + ' ' + row[6];
    account.shippingCity = row[8];
    account.shippingCountry = "UK";
    account.shippingPostCode = row[10];
    account.notes = "";
    account.website = "";
    account.source = "Database2";

    
    account.employees = row[27] === '' ? isNaN(row[27]) : row[27];
    account.annualRevenue = row[28] === ''  || isNaN(row[28]) ? 0 : row[28];



    return account;
  }

  mapToContact(account: Account, row: any[]) {
    const contact = new Contact();
    contact.accounts = [];
    contact.accounts.push(account);
    contact.title = row[12];
    contact.firstName = row[14]
    contact.lastName = row[15];
    contact.mobile = row[19];
    contact.homePhone = row[19]
    contact.jobTitle = row[16];
    contact.remarks = "";
    contact.email = row[18];

    return contact;
  }

  csvRowToArray(row, delimiter = ',', quoteChar = '"'){
    let nStart = 0, nEnd = 0, a=[], nRowLen=row.length, bQuotedValue;
    while (nStart <= nRowLen) {
        bQuotedValue = (row.charAt(nStart) === quoteChar);
        if (bQuotedValue) {
            nStart++;
            nEnd = row.indexOf(quoteChar + delimiter, nStart)
        } else {
            nEnd = row.indexOf(delimiter, nStart)
        }
        if (nEnd < 0) nEnd = nRowLen;
        a.push(row.substring(nStart,nEnd));
        nStart = nEnd + delimiter.length + (bQuotedValue ? 1 : 0)
    }
    return a;
}

async getAccountById(id: number) {
  return await this.repo.findByIds([id]);
}

async getAccountByRef(ref: string) {
  return await this.repo.find({
    where: {
      accountRef: ref,
      parentId: -1,
    }
  });
}
}