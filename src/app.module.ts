import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleModule } from './vehicle/vehicle.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';
import { DriverModule } from './driver/driver.module';
import { DriverTypeModule } from './driver-type/driver-type.module';
import { DriverAbsenceModule } from './driver-absence/driver-absence.module';
import { DriverAbsenceTypeModule } from './driver-absence-type/driver-absence-type.module';
import { DriverHoursModule } from './driver-hours/driver-hours.module';
import { VehicleVORModule } from './vehicle-vor/vehicle-vor.module';
import { AccountModule } from './account/account.module';
import { AccountRatingModule } from './account-rating/account-rating.module';
import { AccountTypeModule } from './account-type/account-type.module';
import { ContactModule } from './contact/contact.module';
import { ContactRoleModule } from './contact-role/contact-role.module';
import { IndustryModule } from './industry/industry.module';
import { ProductModule } from './product/product.module';
import { QuoteModule } from './quote/quote.module';
import { QuoteLineModule } from './quote-line/quote-line.module';
import { QuoteStatusModule } from './quote-status/quote-status.module';
import { UnitModule } from './unit/unit.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { OrderModule } from './order/order.module';
import { OrderLineModule } from './order-line/order-line.module';
import { OrderStatusHistoryModule } from './order-status-history/order-status-history.module';
import { ContainerGroupModule } from './container-group/container-group.module';
import { ContainerTypeModule } from './container-type/container-type.module';
import { ContainerSizeTypeModule } from './container-size-type/container-size-type.module';
import { ContainerModule } from './container/container.module';
import { CoreModule } from './core/core.module';
import { OrderTypeModule } from './order-type/order-type.module';
import { SubcontractorModule } from './subcontractor/subcontractor.module';
import { AuthModule } from './auth/auth.module';
import { OrganisationModule } from './organisation/organisation.module';
import { UserGroupPermissionModule } from './user-group-permission/user-group-permission.module';
import { UserGroupModule } from './user-group/user-group.module';
import { PermissionAreaModule } from './permission-area/permission-area.module';
import { UserPermission } from './user-permission/user-permission.entity';
import { SkipOrderTypeModule } from './skip-order-type/skip-order-type.module';
import { ContainerLocationModule } from './container-location/container-location.module';
import { DriverBonusLevelModule } from './driver-bonus-level/driver-bonus-level.module';
import { FuelTypeModule } from './fuel-type/fuel-type.module';
import { FuelPriceModule } from './fuel-price/fuel-price.module';
import { FuelModule } from './fuel/fuel.module';
import { JobStatusModule } from './job-status/job-status.module';
import { JobAssignmentModule } from './job-assignment/job-assignment.module';
import { JobModule } from './job/job.module';
import { SkipRoundModule } from './skip-round/skip-round.module';
import { SkipTimelineGateway } from './skip-timeline.gateway';
import { GradeModule } from './grade/grade.module';
import { JobSignoffStatusModule } from './job-signoff-status/job-signoff-status.module';
import { TippingPricesModule } from './tipping-prices/tipping-prices.module';
import { InvoicePeriodModule } from './invoice-period/invoice-period.module';
import { InvoiceMethodModule } from './invoice-method/invoice-method.module';
import { CustomerDetailsModule } from './customer-details/customer-details.module';
import { InvoiceStatusModule } from './invoice-status/invoice-status.module';
import { TaxTypeModule } from './tax-type/tax-type.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceItemModule } from './invoice-item/invoice-item.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BatchModule } from './batch/batch.module';
import { CustomerCategoryModule } from './customer-category/customer-category.module';
import { TipDetailsModule } from './tip-details/tip-details.module';
import { DepotDetailsModule } from './depot-details/depot-details.module';
import { WeightStatusModule } from './weight-status/weight-status.module';
import { YardTradeModule } from './yard-trade/yard-trade.module';
import { YardTradePricingModule } from './yard-trade-pricing/yard-trade-pricing.module';
import { SicModule } from './sic/sic.module';
import { SepaModule } from './sepa/sepa.module';
import { ContractStatusModule } from './contract-status/contract-status.module';
import { LeadStatusModule } from './lead-status/lead-status.module';
import { LeadModule } from './lead/lead.module';
import { ContractTypeModule } from './contract-type/contract-type.module';
import { ContractModule } from './contract/contract.module';
import { VehicleDetailsModule } from './vehicledetails/vehicledetails.module';
import { VehicleInspectionIntervalsModule } from './vehicleinspectionintervals/vehicleinspectionintervals.module';
import { VehicleInspectionAssignmentsModule } from './vehicleinspectionassignments/vehicleinspectionassignments.module';
import { DriverChecksModule } from './driver-checks/driver-checks.module';
import { VehicleCheckAreaModule } from './vehicle-check-area/vehicle-check-area.module';
import { VehicleSeverityModule } from './vehicle-severity/vehicle-severity.module';
import { DriverCheckReportsModule } from './driver-check-reports/driver-check-reports.module';
import { DefectsModule } from './defects/defects.module';
import { WorkshopNotesModule } from './workshop-notes/workshop-notes.module';
import { DefectAssignmentModule } from './defect-assignment/defect-assignment.module';
import { WorkshopSubcontractorsModule } from './workshop-subcontractors/workshop-subcontractors.module';
import { DocumentsModule } from './documents/documents.module';
import { PublicFormsModule } from './public-forms/public-forms.module';
import { PublicFormTokenModule } from './public-form-token/public-form-token.module';
import { CreditLimitModule } from './credit-limit/credit-limit.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShredderOrderTypeModule } from './shredder-order-type/shredder-order-type.module';
import { OpportunityModule } from './opportunity/opportunity.module';
import { AssetRegisterModule } from './asset-register/asset-register.module';
import { AssetCategoryModule } from './asset-category/asset-category.module';
import { DriverJobStatusModule } from './driver-job-status/driver-job-status.module';
import { DriverJobMovementModule } from './driver-job-movement/driver-job-movement.module';
import { DriverJobStatusDetailsModule } from './driver-job-status-details/driver-job-status-details.module';
import { ReportingModule } from './reporting/reporting.module';
import { AuditSubscriber } from './core/auditsubscriber';
import { ReportTipIssueModule } from './report-tip-issue/report-tip-issue.module';
import { DriverHealthReportModule } from './driver-health-report/driver-health-report.module';
import { DriverCheckGroupModule } from './driver-check-group/driver-check-group.module';
import { AccountIncumbentModule } from './account-incumbent/account-incumbent.module';
import { IncumbentsModule } from './incumbents/incumbents.module';
import { UserSettingsModule } from './user-settings/user-settings.module';
import { EnvironmentSettingsModule } from './environment-settings/environment-settings.module';
import { ContainerGradesModule } from './container-grades/container-grades.module';
import { UserPermissionModule } from './user-permission/user-permission.module';
import { SecondaryVehicleTypeModule } from './secondary-vehicletype/secondary-vehicletype.module';

import { PermissionModule } from './permission/permission.module';
import { InspectionDatesModule } from './inspection-dates/inspection-dates.module';
import { SubcontractorTypeModule } from './subcontractor-type/subcontractor-type.module';
import { FitterModule } from './fitter/fitter.module';
import { DefectJobModule } from './defect-job/defect-job.module';
import { DefectStatusModule } from './defect-status/defect-status.module';
import { DiscussionModule } from './discussion/discussion.module';
import { QuoteStatusHistoryModule } from './quote-status-history/quote-status-history.module';
import { RecurrenceTypeModule } from './recurrence-type/recurrence-type.module';
import { ContractProductModule } from './contract-product/contract-product.module';
import { ShreddingMethodModule } from './shredding-method/shredding-method.module';


import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}
import { FileSystemModule } from './file-system/file-system.module';
import { FitterHoursModule } from './fitter-hours/fitter-hours.module';
import { FitterAbsenceTypeModule } from './fitter-absence-type/fitter-absence-type.module';
import { FitterAbsenceModule } from './fitter-absence/fitter-absence.module';
import { RecurrenceModule } from './recurrence/recurrence.module';
import { CorrespondenceModule } from './correspondence/correspondence.module';
import { CorrespondenceTypeModule } from './correspondence-type/correspondence-type.module';
import { MessagingModule } from './messaging/messaging.module';
import { PartsModule } from './parts/parts.module';
import { CalendarModule } from './calendar/calendar.module';
import { CalendarEventModule } from './calendar-event/calendar-event.module';
import { EmailLogModule } from './email-log/email-log.module';
import { PartAssignmentModule } from './part-assignment/part-assignment.module';
import { DriverCheckStatusModule } from './driver-check-status/driver-check-status.module';
import { PartCategoryModule } from './part-category/part-category.module';
import { SavedSearchModule } from './saved-search/saved-search.module';
import { PriceListModule } from './price-list/price-list.module';
import { ServiceTypeModule } from './service-type/service-type.module';
import { PriceListItemModule } from './price-list-item/price-list-item.module';
import { JobSmartWasteModule } from './job-smart-waste/job-smart-waste.module';
import { NominalCodeModule } from './nominal-code/nominal-code.module';
import { YardTradeSmartWasteModule } from './yard-trade-smart-waste/yard-trade-smart-waste.module';
import { UserSkillModule } from './user-skill/user-skill.module';
import { TipTicketModule } from './tip-ticket/tip-ticket.module';
import { MaterialUpliftCostModule } from './material-uplift-cost/material-uplift-cost.module';
import { TotalImportModule } from './total-import/total-import.module';
import { CreditNoteModule } from './credit-note/credit-note.module';
import { PriceListOtherItemModule } from './price-list-other-item/price-list-other-item.module';
import { MaterialUpliftModule } from './material-uplift/material-uplift.module';
import { MaterialUpliftTicketModule } from './material-uplift-ticket/material-uplift-ticket.module';
import { InvoiceEmailLogModule } from './invoice-email-log/invoice-email-log.module';
import { TimelineTransactionLogModule } from './timeline-transaction-log/timeline-transaction-log.module';
import { TransportTimeLineSortOrderModule } from './transport-timeline-sort-order/transport-timeline-sort-order.module';
import { OrderProvisionModule } from './order-provision/order-provision.module';
import { TrailerStatusModule } from './trailer-status/trailer-status.module';

 @Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
    }),
    AuthModule,
    VehicleModule,
    ContainerModule,
    DriverModule,
    OrderModule,
    SubcontractorModule,
    OrganisationModule,
    UserGroupModule,
    UserPermission,
    OpportunityModule,
    AccountModule,
    AccountRatingModule,
    AccountTypeModule,
    ContactModule,
    ContactRoleModule,
    IndustryModule,
    ProductModule,
    QuoteModule,
    QuoteLineModule,
    DefectStatusModule,
    QuoteStatusModule,
    UnitModule,
    DefectStatusModule,
    VehicleModule,
    JobStatusModule,
    VehicleDetailsModule,
    VehicleTypeModule,
    DriverModule,
    SepaModule,
    DriverTypeModule,
    DriverAbsenceModule,
    DriverAbsenceTypeModule,
    DriverHoursModule,
    VehicleVORModule,
    OrderStatusModule,
    OrderModule,
    OrderLineModule,
    OrderStatusHistoryModule,
    ContainerGroupModule,
    ContainerTypeModule,
    ContainerSizeTypeModule,
    ContainerModule,
    CoreModule,
    OrderTypeModule,
    SubcontractorModule,
    SkipOrderTypeModule,
    ContainerLocationModule,
    DriverBonusLevelModule,
    FuelTypeModule,
    FuelPriceModule,
    FuelModule,
    InspectionDatesModule,
    JobAssignmentModule,
    JobModule,
    SkipRoundModule,
    GradeModule,
    JobSignoffStatusModule,
    TippingPricesModule,
    InvoicePeriodModule,
    InvoiceMethodModule,
    CustomerDetailsModule,
    InvoiceStatusModule,
    TaxTypeModule,
    InvoiceModule,
    InvoiceItemModule,
    BatchModule,
    CustomerCategoryModule,
    TipDetailsModule,
    DepotDetailsModule,
    VehicleInspectionIntervalsModule,
    VehicleInspectionAssignmentsModule,
    WeightStatusModule,
    YardTradeModule,
    YardTradePricingModule,
    DocumentsModule,
    SicModule,
    ContactRoleModule,
    ContractTypeModule,
    ContractStatusModule,
    ContractModule,
    LeadStatusModule,
    LeadModule,
    DriverChecksModule,
    VehicleCheckAreaModule,
    VehicleSeverityModule,
    DriverCheckReportsModule,
    DefectsModule,
    WorkshopNotesModule,
    DefectAssignmentModule,
    WorkshopSubcontractorsModule,
    DocumentsModule,
    PublicFormsModule,
    PublicFormTokenModule,
    CreditLimitModule,
    DashboardModule,
    ShredderOrderTypeModule,
    AssetRegisterModule,
    AssetCategoryModule,
    DriverJobStatusModule,
    DriverJobMovementModule,
    DriverJobStatusDetailsModule,
    ReportingModule,
    ReportTipIssueModule,
    DriverHealthReportModule,
    DriverCheckGroupModule,
    AccountIncumbentModule,
    IncumbentsModule,
    UserSettingsModule,
    PermissionAreaModule,
    PermissionModule,
    UserGroupPermissionModule,
    UserPermissionModule,
    EnvironmentSettingsModule,
    ContainerGradesModule,
    SecondaryVehicleTypeModule,
    SubcontractorTypeModule,
    FitterModule,
    DefectJobModule,
    DiscussionModule,
    QuoteStatusHistoryModule,
    RecurrenceTypeModule,
    ContractProductModule,
    ShreddingMethodModule,
    FileSystemModule,
    FitterHoursModule,
    FitterAbsenceTypeModule,
    FitterAbsenceModule,
    RecurrenceModule,
    CorrespondenceModule,
    CorrespondenceTypeModule,
    MessagingModule,
    PartsModule,
    CalendarModule,
    CalendarEventModule,
    EmailLogModule,
    PartAssignmentModule,
    DriverCheckStatusModule,
    PartCategoryModule,
    SavedSearchModule,
    PriceListModule,
    ServiceTypeModule,
    PriceListItemModule,
    JobSmartWasteModule,
    NominalCodeModule,
    YardTradeSmartWasteModule,
    UserSkillModule,
    TipTicketModule,
    MaterialUpliftCostModule,
    TotalImportModule,
    CreditNoteModule,
    PriceListOtherItemModule,
    MaterialUpliftModule,
    MaterialUpliftTicketModule,
    InvoiceEmailLogModule,
    TimelineTransactionLogModule,
    TransportTimeLineSortOrderModule,
    OrderProvisionModule,
    TrailerStatusModule
  ],
  controllers: [AppController],
  providers: [AppService, SkipTimelineGateway],
})
export class AppModule {
  constructor() {
  }
}
