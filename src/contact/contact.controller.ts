import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature, CrudAuth } from '@nestjsx/crud';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';
import { User } from '../auth/user.entity';

@Crud({
    model: {
      type: Contact,
    },
    query: {
      join: {
        role: {
          eager: true
        },
        accounts: {
          eager: true
        }
      }
    }
  })
 /* @CrudAuth({
    property: 'user',
    filter: (user: User) => ({
      organisationId: user.organisationId,
    })
  })*/
  @Feature('contact')
  @Controller('contact')
export class ContactController implements CrudController<Contact>{

    constructor(public service: ContactService) {}

}
