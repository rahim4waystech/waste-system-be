import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { ContactRole } from './contact-role.entity';
import { ContactRoleService } from './contact-role.service';


@Crud({
    model: {
      type: ContactRole,
    },
  })
  @Feature('contact-role')
  @Controller('contact-role')
export class ContactRoleController implements CrudController<ContactRole>{

    constructor(public service: ContactRoleService) {}

}
