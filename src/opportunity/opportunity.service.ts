import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Opportunity } from './opportunity.entity';

@Injectable()
export class OpportunityService extends TypeOrmCrudService<Opportunity> {
  constructor(@InjectRepository(Opportunity) repo) {
    super(repo);
  }

  async getLeaderBoardOfRevenue(startDate: string, endDate: string) {
    if(!startDate || startDate === '') {
      throw new Error('You must provide a start date on getLeaderBoardOfRevenue');
    }

    if(!endDate || endDate === '') {
      throw new Error('You must provide a end date on getLeaderBoardOfRevenue');
    }

    const query = this.repo.createQueryBuilder('opportunity')
    .where('opportunity.createdAt >= :startDate', {startDate: startDate})
    .where('opportunity.createdAt <= :endDate', {endDate: endDate})
    // .leftJoinAndSelect('opportunity.account', 'account')
    .leftJoinAndSelect('opportunity.owner', 'owner');

    const opportunities = await query.getMany();
    let leaderboard = {};

    opportunities.forEach((opportunity) => {
      if(!leaderboard[opportunity.owner.firstName + ' ' + opportunity.owner.lastName]) {
        leaderboard[opportunity.owner.firstName + ' ' + opportunity.owner.lastName] = 0;
      }

      leaderboard[opportunity.owner.firstName + ' ' + opportunity.owner.lastName] += opportunity.actualRevenue;

    })

    return leaderboard;


  }
}
