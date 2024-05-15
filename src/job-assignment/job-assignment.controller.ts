
import { JobAssignment } from "./job-assignment.entity";
import { Crud, CrudController, CrudRequest, Feature, ParsedRequest } from "@nestjsx/crud";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { JobAssignmentService } from "./job-assignment.service"
import { Param } from "@nestjs/common";
import { VehicleService } from "src/vehicle/vehicle.service";
import { DriverService } from "src/driver/driver.service";
import { Driver } from "src/driver/driver.entity";
import { DriverAbsence } from "src/driver-absence/driver-absence.entity";
import { VehicleVOR } from "src/vehicle-vor/vehicle-vor.entity";
import { Job } from "src/job/job.entity";
import { JobService } from "src/job/job.service";
/**
 * This file was generated by Four Ways Technology
 *
 * On Tue Aug 25 2020 13:47:39 GMT+0100 (British Summer Time)
 */
@Crud({
    model: {
      type: JobAssignment
    },
    query: {
      join: {
        driver: {
          eager: false
        },
        vehicle: {
          eager: false
        },
        trailer: {
          eager: false
        },
        subcontractor: {
          eager: false
        },
        recurrence: {
          eager: true,
        }
      }
    }
  })
  @Feature('job-assignment')
  @Controller('job-assignment')
  export class JobAssignmentController implements CrudController<JobAssignment> {
    constructor(public service: JobAssignmentService,
      private driverService: DriverService,
      private jobService: JobService,
      private vehicleService: VehicleService) {}

    @Post('copy')
    async copyJobs(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
     
      const jobs = data.jobs;
      const assignments = data.jobAssignments;

      const date = data.date;


      const orderTypeId = data.orderTypeId; 
      // run autopairing for the next date to ensure routes are there

      // TODO: sort this for other timelines
      await this.autoPair(date, 5, orderTypeId);


      const dateAssignments = await this.service.getAllForDateAndOrderType(date, orderTypeId);

      const dateJobs = await this.jobService.getAllJobsByAssignmentIds(dateAssignments.map(da => da.id));
      for(let i = 0; i < jobs.length; i++) {
        const currentJob = jobs[i];

        const assignment = assignments.filter(a => a.id === currentJob.jobAssignmentId)[0];

        // check own vehicle
        let hasAssignmentAlready = dateAssignments.filter(a => a.driverId === assignment.driverId && assignment.vehicleId === a.vehicleId && a.subcontractorId === -1).length > 0;

        // check subbie
        hasAssignmentAlready = dateAssignments.filter(a => a.subcontractorId === assignment.subcontractorId && a.name === assignment.name).length > 0;

        let jobAssignment: JobAssignment = null;

        let blockId = -1;

        if(!hasAssignmentAlready) {
          jobAssignment = JSON.parse(JSON.stringify(assignment));
          jobAssignment.id = -1;
          jobAssignment.date = date;

          // find next avaliable block id, so jobs don't double up.

        } else {
          jobAssignment = dateAssignments.filter(a => a.driverId === assignment.driverId && assignment.vehicleId === a.vehicleId && a.subcontractorId === -1)[0];

          // fallback to subbie
          if(!jobAssignment) {
            jobAssignment = dateAssignments.filter(a => a.subcontractorId === assignment.subcontractorId && a.name === assignment.name)[0];
          }
        }

        // new one save to db
        if(jobAssignment.id === -1) {

        Object.keys(jobAssignment).forEach((key: string) => {
          if(!jobAssignment[key]) {
            jobAssignment[key] = {id: -1} as any;
          }
        });

          jobAssignment.date = date;

          delete jobAssignment.id;
          
          const savedAssignment = await this.service.saveDTO(jobAssignment);
          jobAssignment.id = savedAssignment.id;

          dateAssignments.push(savedAssignment);
        }
        
        // create new job
        const newJob: Job = JSON.parse(JSON.stringify(currentJob));
        
        delete newJob.id;
        delete newJob.createdAt;
        delete newJob.updatedAt;

        newJob.driverJobStatus = {id: -1} as any;
        newJob.driverJobStatusId = -1;
        newJob.jobAssignmentId = jobAssignment.id;
        newJob.jobAssignment = {id: jobAssignment.id} as any;
        newJob.jobManagerSignOff = false;
        newJob.jobSignOffStatusId = -1;
        newJob.notes = '';
        newJob.weightNotes = '';
        newJob.transportSignOffNotes = '';
        newJob.subcontractorReg = '';
        newJob.timelineNotes = '';
        newJob.tippedSignature = '';
        newJob.tippedSignatureName = '';
        newJob.weight = 0;
        newJob.transportSignOffNotes = '';
        newJob.weight = -1;
        newJob.overridePrice = false;
        newJob.jobStatusId = 1; // pending
        newJob.jobStatus = {id: 1} as any;
        newJob.carriarSignature = '';
        newJob.carriarSignatureName = '';
        newJob.newPrice = 0;
        newJob.qty = 1;

        newJob.date = date;
        newJob.blockNumber = this.getNextBlockId(dateJobs, newJob.jobAssignmentId);

        dateJobs.push(newJob);
        await this.jobService.updateJob(newJob);
 
      }

      // Completed job
      return 1;
    }

    @Get('nextSlotId/:date/:orderTypeId')
    async getNextSlotId(@Param('date') date: string, @Param('orderTypeId') orderTypeId: number = -1) {
      return await this.service.getNextSlotId(date, orderTypeId);
    }

    @Get('autopair/:date/:vehicleTypeId/:orderTypeId')
    async autoPair(@Param('date') date: string, @Param('vehicleTypeId') vehicleTypeId: number=-1, @Param('orderTypeId') orderTypeId: number = -1) {

      const absence: DriverAbsence[] = await this.service.getAbsence(date);
      const vors: VehicleVOR[] = await this.service.getVOR(date);

      const allocationForToday = await this.service.getAllocationForToday(date, orderTypeId);
      const allocationForYesterday = await this.service.getAllocationForPreviousDay(date, orderTypeId);
      
      // Auto paring already done
      if(allocationForToday.length > 0) {
        return 1;
      }


      for(let i = 0; i < allocationForYesterday.length; i++) {


        
        const allocation: JobAssignment = allocationForYesterday[i];

        const isAbsent = absence.filter(a => a.driverId === allocation.driverId).length > 0;
        const isVor = vors.filter(a => a.vehicleId === allocation.vehicleId).length > 0;

        const vehicle = allocation.vehicle;
        const driver = allocation.driver;

        if((vehicle?.active || vehicle === null) && (driver?.active || driver === null) && !isVor && !isAbsent) {
          const jobAssignment = new JobAssignment();
          jobAssignment.driverId = allocation.driverId;
          jobAssignment.driver = allocation.driver ? allocation.driver : {id: -1} as any;
          jobAssignment.vehicleId = allocation.vehicleId;
          jobAssignment.vehicle = allocation.vehicle ? allocation.vehicle : {id: -1} as any;
          jobAssignment.depotId = allocation.depotId
          jobAssignment.depot =  allocation.depot;
          jobAssignment.subcontractorId = allocation.subcontractorId;
          jobAssignment.subcontractor = allocation.subcontractor ? allocation.subcontractor : {id: -1} as any;;
          jobAssignment.createdBy = allocation.createdBy;
          jobAssignment.trailer = {id: -1} as any;
          jobAssignment.trailerId = allocation.trailer ? allocation.trailer : {id: -1} as any;
          jobAssignment.date = date;
          jobAssignment.driverStartTime = allocation.driverStartTime;
          jobAssignment.name = allocation.name;
          jobAssignment.skipRoundId = -1;
          jobAssignment.orderTypeId = orderTypeId;
          jobAssignment.slotNumber = allocation.slotNumber;

        await this.service.saveDTO(jobAssignment);
        }
      }

      return 1;
    }

    private getNextBlockId(jobs: Job[], jobAssignmentId: number) {
      let blockId = -1;

      const currentJobs = jobs.filter(j => j.jobAssignmentId === jobAssignmentId && j.jobStatusId !== 3);

      currentJobs.forEach((job) => {
        if(job.blockNumber > blockId) {
          blockId = job.blockNumber;
        }
      });

      return blockId + 1;
    }
    @Post('assignjob')
    async assignjob(@ParsedRequest() req: CrudRequest, @Param() params, @Body() data: any) {
      this.jobService.InsertJobAssignment(data.bulk);
      return data.bulk;
    }
  }