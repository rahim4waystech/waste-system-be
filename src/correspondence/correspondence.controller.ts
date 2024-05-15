
import { Correspondence } from "./correspondence.entity";
import { Crud, CrudController, CrudRequestInterceptor, Action, ParsedRequest, CrudRequest } from "@nestjsx/crud";
import { Controller, UseInterceptors, Post, Param, Body } from "@nestjs/common";
import { CorrespondenceService } from "./correspondence.service";
import { MailService } from "src/core/mail.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Thu Mar 18 2021 12:02:52 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: Correspondence
    },
    query: {
      join: {
        correspondenceType: {
          eager: true,
        },
        user: {
          eager: true
        },
        emailLog: {
          eager: true,
        }
      }
    }
  })
  @Controller('correspondence')
  export class CorrespondenceController implements CrudController<Correspondence> {
    constructor(public service: CorrespondenceService, private mailService: MailService) {}

    @UseInterceptors(CrudRequestInterceptor)
    @Action('send-email')
    @Post('send-email')
    async sendEmail(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
      const log = await this.mailService.sendEmail(data.to, data.subject, data.content);
      return log;
    }
  }
