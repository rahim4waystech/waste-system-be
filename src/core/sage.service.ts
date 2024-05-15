import { Invoice } from "src/invoice/invoice.entity";
import { InvoiceItem } from "src/invoice-item/invoice-item.entity";

export class SageService {
    columns: string[] = [
        'AccountNumber',
        'CBAccountNumber',
        'DaysDiscountValid',
        'DiscountValue',
        'DiscountPercentage',
        'DueDate',
        'GoodsValueInAccountCurrency',
        'SalControlValueInBaseCurrency',
        'DocumentToBaseCurrencyRate',
        'DocumentToAccountCurrencyRate',
        'PostedDate',
        'QueryCode',
        'TransactionReference',
        'SecondReference',
        'Source',
        'SYSTraderTranType',
        'TransactionDate',
        'UniqueReferenceNumber',
        'UserNumber',
        'TaxValue',
        'SYSTraderGenerationReasonType',
        'NominalAnalysisTransactionValue/1',
        'NominalAnalysisNominalAccountNumber/1',
        'NominalAnalysisNominalCostCentre/1',
        'NominalAnalysisNominalDepartment/1',
        'NominalAnalysisNominalAnalysisNarrative/1',
        'NominalAnalysisTransactionAnalysisCode/1',
        'NominalAnalysisTransactionValue/2',
        'NominalAnalysisNominalAccountNumber/2',
        'NominalAnalysisNominalCostCentre/2',
        'NominalAnalysisNominalDepartment/2',
        'NominalAnalysisNominalAnalysisNarrative/2',
        'NominalAnalysisTransactionAnalysisCode/2',
        'TaxAnalysisTaxRate/1',
        'TaxAnalysisGoodsValueBeforeDiscount/1',
        'TaxAnalysisDiscountValue/1',
        'TaxAnalysisDiscountPercentage/1',
        'TaxAnalysisTaxOnGoodsValue/1',
        'TaxAnalysisTaxRate/2',
        'TaxAnalysisGoodsValueBeforeDiscount/2',
        'TaxAnalysisDiscountValue/2',
        'TaxAnalysisDiscountPercentage/2',
        'TaxAnalysisTaxOnGoodsValue/2',
        'ChequeCurrencyName',
        'ChequeToBankExchangeRate',
        'ChequeValueInChequeCurrency',
        'TriangularTransaction',
    ];

    generateBatchExport(data: any) {

        let output = '';
        if(!data) {
            throw new Error('You must provide data for batch export in generateBatchExport');
        }

        data.forEach((item, i) => {
            if(!item.invoice || !item.items) {
                throw new Error('Data is invalid in generateBatchExport');
            }

            // Append headers only for first row
            if(i === 0) {
                output += this.generateExportDataFromInvoiceAndItems(item.invoice, item.items, item.invoiceData);
            } else {
                output += this.generateExportDataFromInvoiceAndItems(item.invoice, item.items, item.invoiceData, false);
            }

        });

        return output;
    }

    generateExportDataFromInvoiceAndItems(invoice: Invoice, items: any[], invoiceData, appendHeaders: boolean=true) {

        if(!invoice || invoice.id === -1) {
            throw new Error('You must supply a valid invoice in generateExportDataFromInvoiceAndItems');
        }

        // might be zero charges for some skip jobs.
        // if(!items || items.length === 0) {
        //     throw new Error('You must supply at least one invoice item in generateExportDataFromInvoiceAndItems')
        // }
        let outputData = '';

        if(appendHeaders) {
            outputData += this.columns.join(',') + '\n';
        }

        let subtotal = 0;
        let vatTotal = 0;
        let total = 0;

        items.forEach((item) => {
        item.total = item.qty * item.price;
        subtotal += item.total;
        })

        const vatPercentage = <any>invoice.taxType.rate / 100;
        vatTotal = subtotal * vatPercentage;

        total = vatTotal + subtotal;

        let nominal: any = '0';

        if(items.length > 0) {
            nominal = String(items[0].nominalCode);
        }

        const dataRow = [
            invoice.account.accountRef,
            '', //CBAccountNumber ???
            '', //DaysDiscountValid not used
            '', //DiscountValue not used
            '', //DiscountPercentage not used
            '', //DueDate not used
            total, // Gross total
            total, //SalControlValueInBaseCurrency gross total
            1, //DocumentToBaseCurrencyRate Always 1
            '', //DocumentToAccountCurrencyRate not used ???
            '', //PostedDate not used
            '', //Not used QueryCode
            invoiceData.invoicePrefix + invoice.id, //TransactionReference invoiceNumber
            this.getAddressDetails(invoice.account), //SecondReference billing address first line
            '', //Source not used
            4, //SYSTraderTranType always 4
            invoice.invoiceDate, //TransactionDate invoice date
            '', //UniqueReferenceNumber not used ???
            '', //UserNumber not used
            vatTotal, //TaxValue vat total
            '', //SYSTraderGenerationReasonType not used
            subtotal, //NominalAnalysisTransactionValue/1 net total
            '"' + nominal + '"', //NominalAnalysisNominalAccountNumber/1 nominalcode TODO
            'EUR', //NominalAnalysisNominalCostCentre/1 always EUR
            '', //NominalAnalysisNominalDepartment/1 not used
            '', //NominalAnalysisNominalAnalysisNarrative/1 not used
            '', //NominalAnalysisTransactionAnalysisCode/1 not used
            '', //NominalAnalysisTransactionValue/2 not used
            '', //NominalAnalysisNominalAccountNumber/2 not used
            '', //NominalAnalysisNominalCostCentre/2' not used
            '', //NominalAnalysisNominalDepartment/2 not used
            '', //NominalAnalysisNominalAnalysisNarrative/2 not used
            '', //NominalAnalysisTransactionAnalysisCode/2
            1, //TaxAnalysisTaxRate/1 always 1
            subtotal, //net value TaxAnalysisGoodsValueBeforeDiscount/1
            0, //TaxAnalysisDiscountValue/1 always zero
            0, //TaxAnalysisDiscountPercentage/1 always zero
            vatTotal, //TaxAnalysisTaxOnGoodsValue/1 vat total
            '', //TaxAnalysisTaxRate/2 not used
            '', //TaxAnalysisGoodsValueBeforeDiscount/2 not used
            '', //TaxAnalysisDiscountValue/2 not used
            '', //TaxAnalysisDiscountPercentage/2 not used
            '', //TaxAnalysisTaxOnGoodsValue/2 not used
            '', //ChequeCurrencyName not used
            '', //ChequeToBankExchangeRate not used
            '', //not used
            0, //TriangularTransaction always zero
        ]

        outputData += dataRow.join(',') + '\n';


        return outputData;
    }

    private getAddressDetails(record): string {
        let address = '';

        if (record.billingAddress1.trim() !== '') {
          address += record.billingAddress1 + ' ';
        }

        if (record.billingAddress2.trim() !== '') {
          address += record.billingAddress2 + ' ';
        }

        if (record.billingCity.trim() !== '') {
          address += record.billingCity + ' ';
        }

        if (record.billingCountry.trim() !== '') {
          address += record.billingCountry + ' ';
        }

        if (record.billingPostCode.trim() !== '') {
          address += record.billingPostCode;
        }

        return address;
      }
}
