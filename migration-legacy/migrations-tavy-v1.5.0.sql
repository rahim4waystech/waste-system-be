-- RUNS:

-- Murdoch [x 04/03/2021]
-- WRC [X 25/02/2021]
-- YND [x 03/03/2021]
-- RWM

-- 23/2/21 Migrations to be run

ALTER TABLE `waste`.`vehicle_details` ADD COLUMN `fleetNo` VARCHAR(255) NULL AFTER `wheelPlan`;

ALTER TABLE `waste`.`vehicle_details`
ADD COLUMN `doorPlan` VARCHAR(45) NULL AFTER `updatedAt`,
ADD COLUMN `doorPlanLiteral` VARCHAR(45) NULL AFTER `doorPlan`,
ADD COLUMN `engineNumber` VARCHAR(255) NULL AFTER `doorPlanLiteral`,
ADD COLUMN `seatingCapacity` INT NULL AFTER `engineNumber`,
ADD COLUMN `transmission` VARCHAR(255) NULL AFTER `seatingCapacity`,
ADD COLUMN `transmissionCode` VARCHAR(255) NULL AFTER `transmission`,
ADD COLUMN `transmissionType` VARCHAR(255) NULL AFTER `transmissionCode`;


INSERT INTO `waste`.`fuel_type` (`name`) VALUES ('Petrol');
INSERT INTO `waste`.`fuel_type` (`name`) VALUES ('Electric');
INSERT INTO `waste`.`fuel_type` (`name`) VALUES ('Adblue');


ALTER TABLE `waste`.`driver_job_movement`
ADD COLUMN `siteCheckDone` TINYINT NULL DEFAULT 0 AFTER `tipIssueResolution`;

ALTER TABLE `waste`.`driver_job_movement`
ADD COLUMN `driverBreakTime` TIME NULL AFTER `siteCheckDone`,
ADD COLUMN `chargeableTime` TIME NULL AFTER `driverBreakTime`;


CREATE TABLE `waste`.`defect_status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `createdAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`));

  INSERT INTO `waste`.`defect_status` (`name`) VALUES ('UnAssigned');
  INSERT INTO `waste`.`defect_status` (`name`) VALUES ('Assigned');
  INSERT INTO `waste`.`defect_status` (`name`) VALUES ('Started');
  INSERT INTO `waste`.`defect_status` (`name`) VALUES ('On Hold');
  INSERT INTO `waste`.`defect_status` (`name`) VALUES ('Completed');


  ALTER TABLE `waste`.`defects`
  ADD COLUMN `defectStatusId` INT NULL DEFAULT 1;

  ALTER TABLE `waste`.`user`
ADD COLUMN `fitterId` INT NULL DEFAULT -1 AFTER `driverId`;
