import { Test } from "@nestjs/testing";
import { CoreModule } from "src/core/core.module";
import { CustomerDetailsModule } from "src/customer-details/customer-details.module";
import { DocumentsModule } from "src/documents/documents.module";
import { DriverJobMovementModule } from "src/driver-job-movement/driver-job-movement.module";
import { DriverJobStatusDetailsModule } from "src/driver-job-status-details/driver-job-status-details.module";
import { InvoiceEmailLogModule } from "src/invoice-email-log/invoice-email-log.module";
import { InvoiceItemModule } from "src/invoice-item/invoice-item.module";
import { JobModule } from "src/job/job.module";
import { OrderLineModule } from "src/order-line/order-line.module";
import { TipTicketModule } from "src/tip-ticket/tip-ticket.module";
import { UnitModule } from "src/unit/unit.module";
import { InvoiceController } from "./invoice.controller"
import { InvoiceService } from "./invoice.service";
import { Invoice } from './invoice.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig = require("src/ormconfig");

describe('invoiceController', () => {

    let invoiceController: InvoiceController;
    let invoiceService = {
        removeEmailHistoryItems: (invoiceId: number=-1) => {}
    };

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [InvoiceController],
            providers: [{provide: 'service', useValue: invoiceService}],
            imports: [TypeOrmModule.forRoot(ormconfig),TypeOrmModule.forFeature([Invoice]), JobModule, CustomerDetailsModule, InvoiceItemModule,UnitModule, DriverJobMovementModule, DriverJobStatusDetailsModule, DocumentsModule, TipTicketModule, CoreModule, OrderLineModule, InvoiceEmailLogModule],
          }).compile();
    
        invoiceController = moduleRef.get<InvoiceController>(InvoiceController);
        
      });

      it('should remove history when rolling back', () => {
         spyOn(invoiceService, "removeEmailHistoryItems").and.callThrough();
         invoiceController.deleteAllHistoryItemForInvoiceId(1);

         expect(invoiceService.removeEmailHistoryItems).toHaveBeenCalled();
      })
    
})  