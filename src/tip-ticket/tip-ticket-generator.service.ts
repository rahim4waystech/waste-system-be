import { Injectable } from "@nestjs/common";
import { Job } from "src/job/job.entity";
import { TipTicket } from "./tip-ticket.entity";

@Injectable()
export class TipTicketGeneratorService {
    public generateTipTicketsFromNotes(job: Job) {
      let tipTickets: TipTicket[] = [];


      const tickets: string[] = job.transportSignOffNotes.split('/');
  
      let hasTickets = tickets.length > 0;
      if(hasTickets) {
        let mainTicket:string = tickets[0];
  
  
        tickets.forEach((ticket: string, index) => {
  
          // This assumes over 3 numbers after a slash is a new ticket e.g 123/4/5/130/1/
          if(ticket.length > 3) {
            // It's a large set of numbers so must be a new seq
            mainTicket = ticket;
          }

          let formattedTicketNo = this.getFormattedTicketNo(ticket, mainTicket);
  
          if(!tipTickets[index]) {
            tipTickets.push(this.createTipTicketObject(job, formattedTicketNo));
          } else {
            tipTickets[index].collectionTicketNumber = <any>formattedTicketNo;
          }
        })

  
        // clear up any enpty tickets
        tipTickets = this.cleanUpBlankTickets(tipTickets, mainTicket);
  
      }

      return tipTickets;
    }

    private getFormattedTicketNo(ticket: string='', mainTicket: string=''): string {

        let formattedTicketNo: string = ticket;
        // tidy this up and make it context based.
        if(ticket.length === 3) {
        formattedTicketNo = mainTicket.substring(0, mainTicket.length - 3) + ticket;
        }

        if(ticket.length === 2) {
        formattedTicketNo = mainTicket.substring(0, mainTicket.length - 2) + ticket;
        }
        return formattedTicketNo;
  }

    private createTipTicketObject(job: Job, formattedTicketNo: string=''): TipTicket {
        return {
            collectionTicketNumber: formattedTicketNo,
            jobId: job.id,
            qty: 1,
            ticketNo: "",
            supplierInvoiceNumber: "",
            deleted: false,
            isSignedOff: false,
            unitId: job.order.tipUnitId, // use tip unit
            price: job.order.tipFee,
        } as TipTicket;
    }

    private cleanUpBlankTickets(tipTickets: TipTicket[], mainTicket: string=''): TipTicket[] {
        tipTickets = tipTickets.filter(tt => tt.collectionTicketNumber.toString().trim() !== '' && tt.collectionTicketNumber !== <any>mainTicket.substring(0, mainTicket.length - 3));
        tipTickets = tipTickets.filter(tt => tt.collectionTicketNumber.toString().trim() !== '' && tt.collectionTicketNumber !== <any>mainTicket.substring(0, mainTicket.length - 2));

        return tipTickets;
    }


}