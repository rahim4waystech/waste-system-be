
import { MaterialUpliftTicket } from "./material-uplift-ticket.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Mon Aug 30 2021 14:55:22 GMT+0100 (British Summer Time)
 */
@Injectable()
export class MaterialUpliftTicketService extends TypeOrmCrudService<MaterialUpliftTicket> {
  constructor(@InjectRepository(MaterialUpliftTicket) repo) {
    super(repo);
  }


  async getGrid(page:number=1, amount:number=10, filters:any={}) {

    const offset = (page - 1) * amount;

    let query = this.repo.createQueryBuilder('material_uplift_ticket')
    .leftJoinAndSelect('material_uplift_ticket.job', 'job')
    .leftJoinAndSelect('job.order', 'order')
    .leftJoinAndSelect('material_uplift_ticket.account', 'account')
    .leftJoinAndSelect('order.tipSite', 'tipSite')
    .leftJoinAndSelect('job.jobAssignment', 'jobAssignment')
    .leftJoinAndSelect('jobAssignment.vehicle', 'vehicle')
    .leftJoinAndSelect('jobAssignment.driver', 'driver')
    .leftJoinAndSelect('material_uplift_ticket.unit', 'unit')
    .leftJoinAndSelect('jobAssignment.subcontractor', 'subcontractor')


    if(filters['customer'] && filters['customer'] !== "") { 
      query = query.andWhere('account.name like :name', {name: '%' + filters['customer'] + '%'} )
    }

    if(filters['vehicle'] && filters['vehicle'] !== "") {
      query = query.andWhere('vehicle.registration like :reg', {reg: '%' + filters['vehicle'] + '%'});
    }

    if(filters['subcontractor'] && filters['subcontractor'] !== "") { 
      query = query.andWhere('subcontractor.name like :name', {name: '%' + filters['subcontractor'] + '%'} )
    }

    if(filters['jobNumber'] && filters['jobNumber'] !== "") {
      query = query.andWhere('jobId = :jobId', {jobId: +filters['jobNumber']});
    }

    if(filters['ticketNumber'] && filters['ticketNumber'] !== "") {
      query = query.andWhere('ticketNumber LIKE :ticketNumber', {ticketNumber: '%' + filters['ticketNumber'] + '%'});
    }

    if(filters['startDate'] && filters['endDate'] && filters['startDate'] !== ""  && filters['endDate'] !== "") {
      query = query.andWhere('job.date >= :date', {date: filters['startDate']});
      query = query.andWhere('job.date <= :enddate', {enddate: filters['endDate']});
    }

    if(filters['tipSite'] && filters['tipSite'] !== "") { 
      query = query.andWhere('tipSite.name like :tipSite', {tipSite: '%' + filters['tipSite'] + '%'} )
    }

    if(filters['status']) {
      if(filters['status'] === 'not' || filters['status'] === 'signed') {
        query = query.andWhere('signedOff = :status', {status: filters['status'] === 'not' ? 0 : 1});
      }
    }

    if(filters['supplierInvoiceNumber'] && filters['supplierInvoiceNumber'] !== "") {
      query = query.andWhere('supplierInvoiceNumber LIKE :supplierInvoiceNo', {supplierInvoiceNo: '%' + filters['supplierInvoiceNumber'] + '%'});
    }

    query = query.andWhere('deleted = 0');



    const results = await  query
    .take(amount)
    .skip(offset)
    .getManyAndCount();


    return {
      data: results[0],
      count: results[0].length,
      total: results[1],
      page: page,
      pageCount: Math.ceil(results[1] / amount),
    }


  }
}
