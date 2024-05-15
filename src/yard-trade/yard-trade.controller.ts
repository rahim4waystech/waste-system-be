
import { YardTrade } from "./yard-trade.entity";
import { Action, Crud, CrudController, CrudRequest, CrudRequestInterceptor, ParsedRequest } from "@nestjsx/crud";
import { Body, Controller, Param, Post, UseInterceptors } from "@nestjs/common";
import { YardTradeService } from "./yard-trade.service";
import { Job } from "src/job/job.entity";
import { PDFService } from "src/core/pdf.service";
import { YardTradePricing } from "src/yard-trade-pricing/yard-trade-pricing.entity";
import { CustomerDetails } from "src/customer-details/customer-details.entity";
import { YardTradePricingService } from "src/yard-trade-pricing/yard-trade-pricing.service";
/**
 * This file was generated by Four Ways Technology
 * 
 * On Mon Oct 26 2020 14:16:46 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: YardTrade
    },
    query: {
      join: {
        customer: {
          eager: true,
        },
        depot: {
          eager: true,
        },

        // DO NOT MAKE THIS EAGER TRUE or yard trade will require changing
        yardTradePricing: {
          eager: false,
        },
        grade: {
          eager: false,
        }
      }
    }
  })
  @Controller('yard-trade')
  export class YardTradeController implements CrudController<YardTrade> {
    constructor(public service: YardTradeService,
      private yardTradePricingService: YardTradePricingService,
      private pdfService: PDFService) {}


    @UseInterceptors(CrudRequestInterceptor)
    @Action('ticket-out-app')
    @Post('ticket-out-app/')
    async wasteTransferNoteOutApp(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
      const yardTrade = <any>data.yardTrade;


      const pricing = await this.yardTradePricingService.getAllPricingForYardTrade(yardTrade.id);

      const totals = {
        net: 0,
        vat: 0,
        gross: 0,
      }

      pricing.forEach((priceItem: YardTradePricing) => {
        totals.net += priceItem.qty * priceItem.price;
      });

      totals.vat = totals.net * 0.20;
      totals.gross = totals.vat + totals.net;


      let customerDetails = await this.service.getCustomerDetails(yardTrade.customerId);
      customerDetails = customerDetails[0];


      let sicCode = await this.service.getSicCode(yardTrade.customer.sicId);
      sicCode = sicCode[0]

      // Fallback gracefully if no details set.
      if(!customerDetails) {
        customerDetails = new CustomerDetails();
      }

      await this.pdfService.createPDFUsingTemplate('app-waste-transfer-note-trade-out-total', __dirname + '/../../assets/weighbridge/app-ticket'+ yardTrade.id, {yardTrade: yardTrade, sicCode: sicCode, details:customerDetails , address: this.getAddressDetails(yardTrade.customer), totals: totals, pricing: pricing});

      return {fileName: '/weighbridge/app-ticket'+ yardTrade.id + '.pdf'};
    }

    @UseInterceptors(CrudRequestInterceptor)
    @Action('ticket-in-app')
    @Post('ticket-in-app/')
    async wasteTransferNoteInApp(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
      const yardTrade = <any>data.yardTrade;

      let customerDetails = await this.service.getCustomerDetails(yardTrade.customerId);
      customerDetails = customerDetails[0];


      let sicCode = await this.service.getSicCode(yardTrade.customer.sicId);
      sicCode = sicCode[0]

      // Fallback gracefully if no details set.
      if(!customerDetails) {
        customerDetails = new CustomerDetails();
      }
 
      await this.pdfService.createPDFUsingTemplate('app-waste-transfer-note-trade-in-total', __dirname + '/../../assets/weighbridge/app-ticket'+ yardTrade.id, {yardTrade: yardTrade, sicCode: sicCode, details:customerDetails , address: this.getAddressDetails(yardTrade.customer), invoiceInfo: data.invoiceInfo});

      return {fileName: '/weighbridge/app-ticket'+ yardTrade.id + '.pdf'};
    }

    @UseInterceptors(CrudRequestInterceptor)
    @Action('ticket-out')
    @Post('ticket-out/')
    async wasteTransferNoteOut(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {

      const yardTrade = <any>data.yardTrade;

      let customerDetails = await this.service.getCustomerDetails(yardTrade.customerId);
      
      customerDetails = customerDetails[0];

      let sicCode = await this.service.getSicCode(yardTrade.customer.sicId);
      sicCode = sicCode[0];

      // Fallback gracefully if no details set.
      // if(!customerDetails) {
      //   customerDetails = new CustomerDetails();
      // }

      let find = '%REPLACE%';
      let re = new RegExp(find, 'g');
      data.invoiceInfo.wasteTransferTermsBlockA = data.invoiceInfo.wasteTransferTermsBlockA.replace(re, data.invoiceInfo.companyName);
      data.invoiceInfo.wasteTransferTermsBlockB = data.invoiceInfo.wasteTransferTermsBlockB.replace(re, data.invoiceInfo.companyName);

 
      await this.pdfService.createPDFUsingTemplate('waste-transfer-note-trade-out', __dirname + '/../../assets/weighbridge/ticket'+ yardTrade.id, {yardTrade: yardTrade, sicCode: sicCode, details:customerDetails , address: this.getAddressDetails(yardTrade.customer), invoiceInfo: data.invoiceInfo});

      return {fileName: '/weighbridge/ticket'+ yardTrade.id + '.pdf', yardTrade: YardTrade};
    }

    @UseInterceptors(CrudRequestInterceptor)
    @Action('ticket')
    @Post('ticket/')
    async wasteTransferNote(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {

      const yardTrade = <any>data.yardTrade;

      let customerDetails = await this.service.getCustomerDetails(yardTrade.customerId);
      customerDetails = customerDetails[0];


      let sicCode = await this.service.getSicCode(yardTrade.customer.sicId);
      sicCode = sicCode[0]

      // Fallback gracefully if no details set.
      if(!customerDetails) {
        customerDetails = new CustomerDetails();
      }

      let find = '%REPLACE%';
      let re = new RegExp(find, 'g');
      data.invoiceInfo.wasteTransferTermsBlockA = data.invoiceInfo.wasteTransferTermsBlockA.replace(re, data.invoiceInfo.companyName);
      data.invoiceInfo.wasteTransferTermsBlockB = data.invoiceInfo.wasteTransferTermsBlockB.replace(re, data.invoiceInfo.companyName);

 
      await this.pdfService.createPDFUsingTemplate('waste-transfer-note-trade-in', __dirname + '/../../assets/weighbridge/ticket'+ yardTrade.id, {yardTrade: yardTrade, sicCode: sicCode, details:customerDetails , address: this.getAddressDetails(yardTrade.customer), invoiceInfo: data.invoiceInfo});

      return {fileName: '/weighbridge/ticket'+ yardTrade.id + '.pdf'};
    }

    private getAddressDetails(record): string {
      let address = '';
  
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
  
      return address;
    }
  }

  
