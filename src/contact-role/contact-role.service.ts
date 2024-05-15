import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ContactRole } from './contact-role.entity';

@Injectable()
export class ContactRoleService extends TypeOrmCrudService<ContactRole> {
  constructor(@InjectRepository(ContactRole) repo) {
    super(repo);
  }
}