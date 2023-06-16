import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1686878788701 implements MigrationInterface {
    name = 'Default1686878788701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "contractorId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_d57ed84d4d29198becd0879f3e8" UNIQUE ("contractorId")`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6f9395c9037632a31107c8a9e58"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_6f9395c9037632a31107c8a9e58" UNIQUE ("companyId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6f9395c9037632a31107c8a9e58" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d57ed84d4d29198becd0879f3e8" FOREIGN KEY ("contractorId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d57ed84d4d29198becd0879f3e8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6f9395c9037632a31107c8a9e58"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_6f9395c9037632a31107c8a9e58"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6f9395c9037632a31107c8a9e58" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_d57ed84d4d29198becd0879f3e8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "contractorId"`);
    }

}
