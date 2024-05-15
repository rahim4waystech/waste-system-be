-- RUNS:

-- Murdoch [x 05/04/2021]
-- WRC 
-- YND [x 03/03/2021]
-- RWM 
-- Testing [x 03/03/2021]


CREATE TABLE `waste`.`contract_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `contractId` INT NULL,
  `productId` INT NULL,
  `qty` FLOAT NULL,
  `price` FLOAT NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `waste`.`tipping_prices` 
ADD COLUMN `effectiveDate` DATE NULL AFTER `unitId`;

ALTER TABLE `waste`.`account` 
ADD COLUMN `poNumber` VARCHAR(255) NULL AFTER `isactive`;