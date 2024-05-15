
import { DriverJobMovement } from "./driver-job-movement.entity";
import { Crud, CrudController, CrudRequestInterceptor, Action, ParsedRequest, CrudRequest } from "@nestjsx/crud";
import { Controller, UseInterceptors, Post, Param, Body, Get, Query } from "@nestjs/common";
import { DriverJobMovementService } from "./driver-job-movement.service";
import { PDFService } from "src/core/pdf.service";
import { UnitService } from "src/unit/unit.service";
import { In } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as moment from 'moment';
import { DriverJobStatusService } from "src/driver-job-status/driver-job-status.service";
import { DriverJobStatusDetailsService } from "src/driver-job-status-details/driver-job-status-details.service";
import { DocumentsService } from "src/documents/documents.service";
import { MailService } from "src/core/mail.service";
import { DriverJobStatusDetails } from "src/driver-job-status-details/driver-job-status-details.entity";
/**
 * This file was generated by Four Ways Technology
 *
 * On Fri Jan 15 2021 12:50:28 GMT+0000 (Greenwich Mean Time)
 */
@Crud({
    model: {
      type: DriverJobMovement
    },
    query:{
      join: {

        // These must remain false do not change, as this will break the driver app.
        vehicle: {
          eager: false,
        },
        driver: {
          eager: false,
        },
        job: {
          eager: false,
        },
        "job.order": {
          eager: false,
        },
      }
    }
  })
  @Controller('driver-job-movement')
  export class DriverJobMovementController implements CrudController<DriverJobMovement> {
    constructor(public service: DriverJobMovementService,
      private unitService: UnitService,
      private documentsService: DocumentsService,
      private mailService: MailService,
      private driverJobStatusDetailsService: DriverJobStatusDetailsService,
      private pdfService: PDFService) {}

    @UseInterceptors(CrudRequestInterceptor)
    @Action('pdf')
    @Post('pdf/:id')
    async pdf(@ParsedRequest() req: CrudRequest, @Query('type') type, @Param() params, @Body() data: any) {
  
      const podId = params['id'];
      await this.pdfService.createPDFUsingTemplate(type, __dirname + '/../../assets/pod/' + podId, {datasets: [data]});
  
      return { fileName: '/pod/' + podId + '.pdf' };
  
    }


    @UseInterceptors(CrudRequestInterceptor)
    @Action('pdf-batch')
    @Post('pdf-batch')
    async pdfBatch(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
      const podsIds = data.podIds;
      const invoicingInfo = data.invoicingInfo;
      const template = !data.invoicingInfo.podTemplate ? 'pod' : data.invoicingInfo.podTemplate;
      const tipDetails = data.tipDetails;

      const pods = await this.service.find({where: {id: In(podsIds)}, relations: ["vehicle", "driver", "job","job.order","job.order.grade","job.order.account","job.order.site", "job.order.orderLines", "job.order.orderLines.quoteLine", "job.order.orderLines.quoteLine.product"]})

      const units = await this.unitService.find();


      const datasets = [
      ]

        for(let i = 0; i < pods.length; i++) {
          const pod: any = pods[i];

          const historyData = await this.driverJobStatusDetailsService.getAllHistoryByJobId(pod.job.id);
          
          const history = [];

          // fix for driver app holding this on job id not movement id
          historyData.forEach((item: DriverJobStatusDetails) => {
    
            if(moment(pod.createdAt, 'HH:mm').isSameOrAfter(moment(item.createdAt, 'HH:mm'))) {
              const alreadyPresent = history.filter(h => item.driverJobStatusId === h.driverJobStatusId).length > 0;
    
              if(!alreadyPresent) {
                history.push(item);
              }
            }
          })
          
          const imagesRaw = await this.documentsService.getDocumentsByEntityNameAndId("driver-job-movement", pod.id);
          const images = [];

          // get all files from filesystem
          imagesRaw.forEach((document) => {
            const path = __dirname + "/../../files/"  + document.filename;
            const contents = fs.readFileSync(path, {encoding: 'base64'});
            images.push({
              filetype: document.filetype,
              filename:document.originalFilename,
              data: contents.toString()
            });
          })

          datasets.push({
            pod: pod,
            order: pod.job.order,
            companyName: invoicingInfo.companyName,
            addressInfo: this.getCompanyAddress(invoicingInfo),
            companyLogo: invoicingInfo.companyLogo,
            service: this.getService(pod.job.order.orderLines),
            serviceUnit: this.getUnit(pod.job.order.orderLines, units),
            serviceAmount: pod.qty,
            siteAddress: this.getSiteAddress(pod.job.order),
            signatureDetails: this.getSignatureDetails(history),
            images: images,
            tipDetails: tipDetails,
            gpsCordsForSignature :history.filter(h => h.driverJobStatusId === 4)[0],
          })
      }


      const batchId = uuidv4();

      await this.pdfService.createPDFUsingTemplate(template, __dirname + '/../../assets/pod/batch/' + batchId, {datasets: datasets});
  
      return { fileName: '/pod/batch/' +  batchId + '.pdf' };
    }

    @UseInterceptors(CrudRequestInterceptor)
    @Post('email/')
    @Action('email')
    async email(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
      const podIds = data.podIds;
      const toEmail = data.toEmail;
      const message = data.message;
  
      const attachments = [];
  
      const result: any = await this.pdfBatch(req, params, {podIds: podIds, invoicingInfo: data.invoicingInfo})
  
  
      attachments.push({
        filename:  'pods.pdf',
        content: fs.createReadStream( __dirname + '/../../assets/pod/batch/' + result.filename + '.pdf')
    });
  
      await this.mailService.sendEmailWithTemplate(toEmail, "Waste System | PODs", 'generic',{message: message.replace(/(?:\r\n|\r|\n)/g, '<br>')}, attachments);
  
      return {};
    }

    private getSignatureDetails(history: any = []) {
      const result = history.filter(h => h.driverJobStatusId === 4)[0];
      
      if(!result) {
        return "Signature time was not captured"
      } else {
        return "Signature Signed at " + moment("10/05/1991 " + result.time).format('HH:mm:ss') + " on " + moment(result.date).format('DD/MM/YYYY');
      }
    }

    private getSiteAddress(order: any) {
      let address = "";
  
      if(order.site.shippingAddress1 !== "") {
        address += order.site.shippingAddress1 + "<br />";
      }  
      
      if(order.site.shippingAddress2 !== "") {
        address += order.site.shippingAddress2 + "<br />";
      }
  
      if(order.site.shippingCity !== "") {
        address += order.site.shippingCity + "<br />";
      } 
      
      if(order.site.shippingCountry !== "") {
        address += order.site.shippingCountry + "<br />";
      } 
      
      if(order.site.shippingPostCode !== "") {
        address += order.site.shippingPostCode + "<br />";
      }
  
  
      return address;
    }
  
    private getCompanyAddress(invoicing: any) {
      let address = "";
  
      if(invoicing.address1 !== "") {
        address += invoicing.address1 + "<br />";
      }
  
      if(invoicing.address2 !== "") {
        address += invoicing.address2 + "<br />";
      }
  
      if(invoicing.addressCity !== "") {
        address += invoicing.addressCountry + "<br />";
      }
  
      if(invoicing.addressCountry !== "") {
        address += invoicing.addressCountry + "<br />";
      }
  
      if(invoicing.addressPostcode !== "") {
        address += invoicing.addressPostcode + "<br />";
      }
  
      return address;
    }

    getService(orderLines: any) {
      const serviceType = '';
  
      let service = orderLines.filter(ol => ol.isPrimaryCharge)[0];
  
      if(!service) {
        service = orderLines[0];
      }
  
      return service.quoteLine ? service.quoteLine?.product.name : service.name;
    }

    getUnit(orderLines: any, units:any) {
      const serviceType = '';
  
      let service = orderLines.filter(ol => ol.isPrimaryCharge)[0];
  
      if(!service) {
        service = orderLines[0];
      }
  
      const unit = units.filter(u => u.id === service.quoteLine?.product.unitId)[0];
  
      if(unit) {
        return unit.name;
      } else {
        // must be quick item
        const unitpl = units.filter(u => u.id === service.unitId)[0];
        return unitpl.name;
      }
    }
  }