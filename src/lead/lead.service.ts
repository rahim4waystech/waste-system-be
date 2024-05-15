import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Lead } from './lead.entity';
import { start } from "repl";

@Injectable()
export class LeadService extends TypeOrmCrudService<Lead> {
  constructor(@InjectRepository(Lead) repo) {
    super(repo);
  }

  async getLeaderBoardOfRevenue(startDate: string, endDate: string) {
    if(!startDate || startDate === '') {
      throw new Error('You must provide a start date on getLeaderBoardOfRevenue');
    }

    if(!endDate || endDate === '') {
      throw new Error('You must provide a end date on getLeaderBoardOfRevenue');
    }

    const query = this.repo.createQueryBuilder('lead')
    .where('lead.createdAt >= :startDate', {startDate: startDate})
    .where('lead.createdAt <= :endDate', {endDate: endDate})
    .leftJoinAndSelect('lead.account', 'account')
    .leftJoinAndSelect('lead.owner', 'owner');

    const leads = await query.getMany();
    let leaderboard = {};

    leads.forEach((lead) => {
      if(!leaderboard[lead.owner.firstName + ' ' + lead.owner.lastName]) {
        leaderboard[lead.owner.firstName + ' ' + lead.owner.lastName] = 0;
      }

      leaderboard[lead.owner.firstName + ' ' + lead.owner.lastName] += lead.estimatedRevenue;

    })

    return leaderboard;


  }
}
