-- RUNS:

-- Murdoch [x 04/03/2021]
-- WRC [X 25/02/2021]
-- YND [x 03/03/2021]
-- RWM 
-- Testing [x]

-- 23/02/21 - for shredding

-- Default col for industryId on accounts

ALTER TABLE `waste`.`account`
CHANGE COLUMN `industryId` `industryId` INT NULL DEFAULT -1 ;


-- Discussions ported from CRM (how very retro)
CREATE TABLE `discussion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` text,
  `entityType` text NOT NULL,
  `entityId` int NOT NULL,
  `parentId` int DEFAULT '-1',
  `createdBy` int NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

  -- Quote approval system
  CREATE TABLE `quote_status_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `quoteId` int NOT NULL,
  `quoteStatusId` int NOT NULL,
  `notes` text NOT NULL,
  `createdBy` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- One for "The deployer"
--Need all existing quotes to be set to accepted on existing systems
--Blanket query should work for this don't run on systems with approval system in place.
UPDATE `quote` set quoteStatusId = 2;

-- Contract interval
CREATE TABLE `recurrence_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `recurrence_type` VALUES (1,'Daily',NULL,NULL),(2,'Weekly',NULL,NULL),(3,'Monthly',NULL,NULL),(4,'Yearly',NULL,NULL);

ALTER TABLE `waste`.`contract`
ADD COLUMN `recurrenceTypeId` INT NULL DEFAULT -1 AFTER `cabinetNo`,
ADD COLUMN `recurrenceAmount` INT NULL DEFAULT 0 AFTER `recurrenceTypeId`,
ADD COLUMN `recurrenceWeekDays` INT NULL DEFAULT -1 AFTER `recurrenceAmount`,
ADD COLUMN `recurrenceDayNo` INT NULL DEFAULT 0 AFTER `recurrenceWeekDays`,
ADD COLUMN `recurrenceMonthNo` INT NULL DEFAULT 0 AFTER `recurrenceDayNo`;
