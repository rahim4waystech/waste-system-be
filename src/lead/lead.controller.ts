import { Controller, Get, UseInterceptors, Post, Param, Body, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature, CrudRequestInterceptor, ParsedRequest, CrudRequest } from '@nestjsx/crud';
import { Lead } from './lead.entity';
import { LeadService } from './lead.service';
import { get } from 'http';

@Crud({
    model: {
      type: Lead,
    },
    query: {
      join: {
        contact : {
          eager: true
        },
        account : {
          eager: true
        },
        status : {
          eager: true
        },
        type : {
          eager: true
        },
        owner: {
          eager: true
        }
      }
    }
  })

  @Feature('lead')
  @Controller('lead')
export class LeadController implements CrudController<Lead>{

    constructor(public service: LeadService) {}

    @UseInterceptors(CrudRequestInterceptor)
    @Get('leaderboard/')
    async leaderboard(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any, @Query() query: any) {
      return await this.service.getLeaderBoardOfRevenue(query.startDate, query.endDate);
    }
}
