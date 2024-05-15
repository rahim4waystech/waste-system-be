import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { ContainerModule } from 'src/container/container.module';
import { TotalImportController } from './total-import.controller';

@Module({
    controllers: [TotalImportController],
    imports: [AccountModule, ContainerModule]
})
export class TotalImportModule {}
