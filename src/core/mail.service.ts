import { Injectable } from "@nestjs/common";

import * as twig from 'twig';
import { EmailLog } from "src/email-log/email-log.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MailService {
    private nodeOutlook: any;

    private auth = {
        username: 'mark.lang@4waystech.co.uk',
        password: 'vqvbnddpqbrzrzkw',
        // username: '',
        // password: '',
    }

    private fromAddress = 'mark.lang@4waystech.co.uk';

    constructor(@InjectRepository(EmailLog)private readonly emailLogRepository: Repository<EmailLog> ) {
        this.nodeOutlook = require('nodejs-nodemailer-outlook');

        let env = process.env.NODE_ENV || 'development';

        if(env === 'ynd') {
            this.auth.username = 'invoices@yuill-and-dodds.co.uk';
            this.auth.password = 'Yup54252';
            this.fromAddress = 'invoices@yuill-and-dodds.co.uk';
        }

        if(env === 'trs') {
            this.auth.username = 'notification@totalrecyclingscotland.co.uk';
            this.auth.password = 'Zaf09792';
            this.fromAddress = 'notification@totalrecyclingscotland.co.uk';
        }
    }

    async sendEmailWithTemplate(to: string, subject: string, template: string, data: any, attachments: any[] = []) {
        if(!template) {
            throw new Error('MailService: You must provide a valid template');
        }

        var fs = require('fs');

        const templateData = fs.readFileSync(__dirname + '/mail-templates/'+ template +'.twig', 'utf8');


        const twigTemplate = twig.twig({
            data: templateData,
        });

        const html = twigTemplate.render(data);

       await this.sendEmail(to, subject, html, attachments);

 
    }

    async sendEmail(to: string, subject: string, message: string, attachments: any[] = []) {

        if(!to || !this.isValidEmail(to)) {
            throw new Error('MailService: sendmail needs a valid to address');
        }

        if(!subject) {
            throw new Error('MailService: sendmail needs a subject address');
        }


        if(!message) {
            throw new Error('MailService: sendmail needs a message');
        }

        // Create email log record for any emails sent
        const log = new EmailLog();
        log.subject = subject;
        log.content = message;
        log.to = to;
        log.from  = this.fromAddress;

        delete log.createdAt;
        delete log.updatedAt;
        await this.emailLogRepository.save(log);

        const result =  this.nodeOutlook.sendEmail({
            auth: {
                user: this.auth.username,
                pass: this.auth.password,
            },
            from: this.fromAddress,
            to: to,
            subject: subject,
            html: message,
            text: message,
            attachments: attachments,
            onError: (err) => {
                throw new Error('Could not send email');
            },
            onSuccess: (info) => {
            }
        })


        return log;
    }

    private isValidEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
}