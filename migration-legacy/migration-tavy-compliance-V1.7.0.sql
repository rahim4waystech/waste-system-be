ALTER TABLE `waste`.`file_system`
CHANGE COLUMN `createdBy` `createdBy` INT NOT NULL AFTER `parentId`,
CHANGE COLUMN `folderName` `folderName` VARCHAR(255) NOT NULL ,
ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE;
;

ALTER TABLE `waste`.`file_system`
CHANGE COLUMN `folderName` `folderName` VARCHAR(255) NOT NULL DEFAULT 'no folder' ;


CREATE TABLE `file_system` (
  `id` int NOT NULL AUTO_INCREMENT,
  `folderName` varchar(255) NOT NULL DEFAULT 'no folder',
  `description` text,
  `parentId` int NOT NULL DEFAULT '-1',
  `createdBy` int DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;