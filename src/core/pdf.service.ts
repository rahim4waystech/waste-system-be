import * as htmlPdf from 'html-pdf-chrome';
import * as twig from 'twig';

import * as fs from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PDFService {

    portForChrome: number = 9222;
    async createPDFUsingTemplate(templateName: string, outputName:string='output', data: any={}, onlyHtml:boolean = false) {

          if(templateName === '' || !templateName) {
              throw new Error('PDFService: You must supply a valid template name');
          }

          if(!fs.existsSync(__dirname + '/pdf-templates/'+ templateName +'.twig')) {
              throw new Error('PDFService: Template does not exist ' + templateName);
          }


          const templateData = fs.readFileSync(__dirname + '/pdf-templates/'+ templateName +'.twig', 'utf8');


          const twigTemplate = twig.twig({
              data: templateData,
          });

          const html = twigTemplate.render(data);

          if(onlyHtml) {
              return html;
          }

          await this.createPDFFromHTML(outputName, html);
    }

    async createPDFFromHTML(outputName: string='output', html:string='') {

        const options: htmlPdf.CreateOptions = {
            //host : "127.0.0.1",
            port: this.portForChrome // port Chrome is listening on
          };

        // async
        const pdf = await htmlPdf.create(html, options);
        await pdf.toFile( outputName +  '.pdf');

    }
}
