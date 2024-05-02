-- CreateTable
CREATE TABLE `Rol` (
    `idRol` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idRol`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `idCodigo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `rolId` INTEGER NOT NULL,
    `usuario` VARCHAR(191) NOT NULL,
    `pass` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idCodigo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Rol`(`idRol`) ON DELETE RESTRICT ON UPDATE CASCADE;
