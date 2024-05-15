import { Module } from '@nestjs/common';
import { PublicFormController } from './public-form.controller';
import { AccountModule } from 'src/account/account.module';

@Module({
  imports: [AccountModule],
  controllers: [PublicFormController],
})
export class PublicFormsModule {}
