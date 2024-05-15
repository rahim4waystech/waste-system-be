
import { TipTicket } from "./tip-ticket.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { isBuffer } from "util";
import { In } from "typeorm";

/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Jul 01 2021 12:32:38 GMT+0100 (British Summer Time)
 */
@Injectable()
export class TipTicketService extends TypeOrmCrudService<TipTicket> {
  constructor(@InjectRepository(TipTicket) repo) {
    super(repo);
  }

  async deleteAllForJobId(jobId) {
    if(!jobId || jobId <= -1) {
      throw new Error("you must provide an valid job id in deleteAllForJobId");
    }

    await this.repo.createQueryBuilder()
    .delete()
    .from(TipTicket)
    .where("jobId = :id", { id: jobId })
    .execute();
  }

  async getAllByJobIds(jobIds: number[] = []) {
   return this.find({
     where: {
       jobId: In(jobIds),
     }
   })
  }

  async getTipTicketGrid(page:number=1, amount:number=10, filters:any={}) {

    const offset = (page - 1) * amount;

    let query = this.repo.createQueryBuilder('tip_ticket')
    .leftJoinAndSelect('tip_ticket.job', 'job')
    .leftJoinAndSelect('job.order', 'order')
    .leftJoinAndSelect('order.account', 'account')
    .leftJoinAndSelect('order.tipSite', 'tipSite')
    .leftJoinAndSelect('job.jobAssignment', 'jobAssignment')
    .leftJoinAndSelect('jobAssignment.vehicle', 'vehicle')
    .leftJoinAndSelect('jobAssignment.driver', 'driver')
    .leftJoinAndSelect('tip_ticket.unit', 'unit')
    .leftJoinAndSelect('jobAssignment.subcontractor', 'subcontractor')

    if(filters['customer'] && filters['customer'] !== "") { 
      query = query.andWhere('account.name like :name', {name: '%' + filters['customer'] + '%'} )
    }

    if(filters['subcontractor'] && filters['subcontractor'] !== "") { 
      query = query.andWhere('subcontractor.name like :name', {name: '%' + filters['subcontractor'] + '%'} )
    }

    if(filters['vehicle'] && filters['vehicle'] !== "") {
      query = query.andWhere('vehicle.registration like :reg', {reg: '%' + filters['vehicle'] + '%'});
    }

    if(filters['subcontractorReg'] && filters['subcontractorReg'] !== "") {
      query = query.andWhere('subcontractorReg like :subreg', {subreg: '%' + filters['subcontractorReg'] + '%'});
    }

    if(filters['jobNumber'] && filters['jobNumber'] !== "") {
      query = query.andWhere('jobId = :jobId', {jobId: +filters['jobNumber']});
    }

    if(filters['tippedTicketNumber'] && filters['tippedTicketNumber'] !== "") {
      query = query.andWhere('ticketNo LIKE :ticketNo', {ticketNo: '%' + filters['tippedTicketNumber'] + '%'});
    }

    if(filters['supplierInvoiceNumber'] && filters['supplierInvoiceNumber'] !== "") {
      query = query.andWhere('supplierInvoiceNumber LIKE :supplierInvoiceNo', {supplierInvoiceNo: '%' + filters['supplierInvoiceNumber'] + '%'});
    }

    if(filters['collectionTicketNumber'] && filters['collectionTicketNumber'] !== "") {
      query = query.andWhere('collectionTicketNumber LIKE :collectionTicketNumber', {collectionTicketNumber: '%' + filters['collectionTicketNumber'] + '%'});
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
        query = query.andWhere('isSignedOff = :status', {status: filters['status'] === 'not' ? 0 : 1});
      }
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

  async getAllJobIdsFromOrder(orderId: number=-1) {
    if(!orderId || orderId === -1) {
      throw new Error('You must provide a valid order id in getAllJobIdsFromOrder');
    }
    return await this.repo.manager.query('select id from job where orderId = ?', [orderId]);
  }
  
  async saveDTO(dto: TipTicket) {
    return await this.repo.save(dto);
  }

}