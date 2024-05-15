
import { VehicleInspectionIntervals } from "./vehicleinspectionintervals.entity";
import { Crud, CrudController, Feature, Action } from "@nestjsx/crud";
import { Controller, Delete, Param } from "@nestjs/common";
import { VehicleInspectionIntervalsService } from "./vehicleinspectionintervals.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Wed Nov 25 2020 10:23:21 GMT (British Winter Time)
 */
@Crud({
    model: {
      type: VehicleInspectionIntervals
    }
  })
  @Controller('vehicleinspectionintervals')
  @Feature('vehicleinspectionintervals')
  export class VehicleInspectionIntervalsController implements CrudController<VehicleInspectionIntervals> {
    constructor(public service: VehicleInspectionIntervalsService) {}

    @Action('deleteByParentId')
    @Delete('deleteByParentId/:parentId')
    deleteByParentId(@Param() params) {

      if(!params['parentId']) {
        throw new Error('You must supply an id for deleteByParentId');
      }

      this.service.deleteByParentId(params['parentId']);
      return [];
    }
  }
