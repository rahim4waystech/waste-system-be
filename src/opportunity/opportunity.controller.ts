
import { Controller, Get, UseInterceptors, Param, Body, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, CrudRequestInterceptor, ParsedRequest, CrudRequest, Feature } from '@nestjsx/crud';
import { Opportunity } from './opportunity.entity';
import { OpportunityService } from './opportunity.service';

@Crud({
    model: {
      type: Opportunity,
    },
    query: {
      join: {
        lead : {
          eager: true
        },
        owner: {
          eager: true
        },
        account: {
          eager: true,
        },
        contact : {
          eager: true
        },
        status: {
          eager: true,
        },
      }
    }
  })
  @Feature('opp')
  @Controller('opportunity')
export class OpportunityController implements CrudController<Opportunity>{

    constructor(public service: OpportunityService) {}

    @UseInterceptors(CrudRequestInterceptor)
    @Get('leaderboard/')
    async leaderboard(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any, @Query() query: any) {
      return await this.service.getLeaderBoardOfRevenue(query.startDate, query.endDate);
    }

}
