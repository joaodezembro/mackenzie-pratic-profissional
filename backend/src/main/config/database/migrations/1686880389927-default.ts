import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1686880389927 implements MigrationInterface {
    name = 'Default1686880389927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d57ed84d4d29198becd0879f3e8"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_d57ed84d4d29198becd0879f3e8"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d57ed84d4d29198becd0879f3e8" FOREIGN KEY ("contractorId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_d57ed84d4d29198becd0879f3e8"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_d57ed84d4d29198becd0879f3e8" UNIQUE ("contractorId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_d57ed84d4d29198becd0879f3e8" FOREIGN KEY ("contractorId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
