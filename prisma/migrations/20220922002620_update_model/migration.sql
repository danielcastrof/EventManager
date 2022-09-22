-- DropForeignKey
ALTER TABLE `Items` DROP FOREIGN KEY `Items_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `People` DROP FOREIGN KEY `People_eventId_fkey`;

-- AddForeignKey
ALTER TABLE `People` ADD CONSTRAINT `People_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Items` ADD CONSTRAINT `Items_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
