import { Controller, Post, Body } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';

@Controller('public-form')
export class PublicFormController {

    // This controller is used for public access endpoints be careful with these as there is potential to spam the system.
    constructor(private accountService: AccountService) {}
    @Post('customer')
    async newCustomer(@Body() customer: any) {
        const account = await this.accountService.createNewAccount(customer);
        return account;
    }
}
