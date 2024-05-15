-- RUNS:

-- Murdoch [x 04/03/2021]
-- WRC 
-- YND [x 03/03/2021]
-- RWM 
-- Test [x 03/03/2021]

ALTER TABLE `waste`.`asset_register`
ADD COLUMN `createdBy` INT NOT NULL AFTER `parentId`;

ALTER TABLE `waste`.`defect_job`
ADD COLUMN `notes` TEXT NOT NULL AFTER `deleted`,
ADD COLUMN `defectStatusId` INT NULL DEFAULT 1 AFTER `notes`;

ALTER TABLE `waste`.`asset_register`
CHANGE COLUMN `description` `description` TEXT NOT NULL ;

ALTER TABLE `waste`.`defects`
CHANGE COLUMN `bookedFor` `bookedFor` DATE NULL ;

ALTER TABLE `waste`.`vehicle_inspection_intervals`
ADD COLUMN `colour` VARCHAR(255) NOT NULL DEFAULT '#FFFFFF' AFTER `entity`;

ALTER TABLE `waste`.`defects`
ADD COLUMN `signoffDate` DATETIME(6) NULL DEFAULT NULL;
