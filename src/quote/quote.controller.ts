import { Controller, Get, UseInterceptors, Post, Param, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature, CrudRequestInterceptor, ParsedRequest, CrudRequest } from '@nestjsx/crud';
import { Quote } from './quote.entity';
import { QuoteService } from './quote.service';
import { PDFService } from 'src/core/pdf.service';
import { QuoteLineService } from 'src/quote-line/quote-line-service';

import * as fs from 'fs';

@Crud({
    model: {
      type: Quote,
    },
    query: {
        join: {
          lead: {
            eager: true
          },
          opportunity: {
            eager: true
          },
          account: {
            eager: true
          },
          quoteStatus: {
            eager: true,
          },
          recurrence: {
            eager: true,
          }
        }
      }
  })
  @Feature('quote')
  @Controller('quote')
export class QuoteController implements CrudController<Quote>{

    constructor(public service: QuoteService,
      private quoteLineService: QuoteLineService,
      private pdfService: PDFService​​) {}

      @UseInterceptors(CrudRequestInterceptor)
      @Post('pdfContent/:id')
      async pdfContent(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
  
        const quote = await this.service.getQuoteById(params.id);
  
        const invoicingInfo = data.pdfSettings;
  
        const lines: any[] = await this.quoteLineService.getAllLinesByQuoteId(quote.id);
  
        // build up data
        let subtotal = 0;
        let vatTotal = 0;
        let total = 0;
  
        lines.forEach((item) => {
          item.total = item.qty * item.newPrice;
          subtotal += item.total;
        })
  
        const vatPercentage = 20 / 100;
        vatTotal = subtotal * vatPercentage;
  
        total = vatTotal + subtotal;
  
        const templateData = { datasets: [{
          invoiceSettings: invoicingInfo,
          quote: quote,
          items: lines,
          subTotal: subtotal,
          vatTotal: vatTotal,
          total: total,
          customerAddress: this.getAddressDetails(quote)
        }]}
  
        await this.pdfService.createPDFUsingTemplate('quote', __dirname + '/../../assets/quote/FWWS-' + quote.id, templateData);
  
        const fileData = fs.readFileSync(__dirname + '/../../assets/quote/FWWS-' + quote.id + '.pdf', {encoding: 'base64'});

       return { data: fileData};
  
      }

    @UseInterceptors(CrudRequestInterceptor)
    @Post('pdf/:id')
    async pdf(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {

      const quote = await this.service.getQuoteById(params.id);

      const invoicingInfo = data.pdfSettings;

      const lines: any[] = await this.quoteLineService.getAllLinesByQuoteId(quote.id);

      // build up data
      let subtotal = 0;
      let vatTotal = 0;
      let total = 0;

      lines.forEach((item) => {
        item.total = item.qty * item.newPrice;
        subtotal += item.total;
      })

      const vatPercentage = 20 / 100;
      vatTotal = subtotal * vatPercentage;

      total = vatTotal + subtotal;

      const templateData = { datasets: [{
        invoiceSettings: invoicingInfo,
        quote: quote,
        items: lines,
        subTotal: subtotal,
        vatTotal: vatTotal,
        total: total,
        customerAddress: this.getAddressDetails(quote)
      }]}

      await this.pdfService.createPDFUsingTemplate('quote', __dirname + '/../../assets/quote/FWWS-' + quote.id, templateData);

     return { fileName: '/quote/FWWS-' + quote.id + '.pdf' };

    }

    private getAddressDetails(quote: Quote): string {

      const record = quote.account;
      let address = '';
      if(quote.accountId !== -1) {
        if (record.billingAddress1.trim() !== '') {
          address += record.billingAddress1 + '<br />';
        }

        if (record.billingAddress2.trim() !== '') {
          address += record.billingAddress2 + '<br />';
        }

        if (record.billingCity.trim() !== '') {
          address += record.billingCity + '<br />';
        }

        if (record.billingCountry.trim() !== '') {
          address += record.billingCountry + '<br />';
        }

        if (record.billingPostCode.trim() !== '') {
          address += record.billingPostCode;
        }
      } else {
        if (quote.contactAddressLine1.trim() !== '') {
          address += quote.contactAddressLine1 + '<br />';
        }

        if (quote.contactAddressLine2.trim() !== '') {
          address += quote.contactAddressLine2 + '<br />';
        }

        if (quote.contactCity.trim() !== '') {
          address += quote.contactCity + '<br />';
        }

        if (quote.contactCountry.trim() !== '') {
          address += quote.contactCountry + '<br />';
        }

        if (quote.contactPostCode.trim() !== '') {
          address += quote.contactPostCode;
        }
      }

      

      return address;
    }
}
