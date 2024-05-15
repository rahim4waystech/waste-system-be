import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { PDFService } from './pdf.service';
import { SageService } from './sage.service';
import { AuditLog } from './auditlog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmailLog } from 'src/email-log/email-log.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([AuditLog, EmailLog​​])
    ],
    providers: [
        MailService,
        PDFService,
        SageService,
    ],
    exports: [
        MailService,
        PDFService,
        SageService,
    ]
})
export class CoreModule {}
