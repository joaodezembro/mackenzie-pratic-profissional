import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1683292500220 implements MigrationInterface {
    name = 'Default1683292500220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cnpj" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "UQ_703760d095b8e399e34950f4960" UNIQUE ("cnpj"), CONSTRAINT "REL_6d64e8c7527a9e4af83cc66cbf" UNIQUE ("userId"), CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_a7815967475d0accd76feba8a1e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cnpj"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "companyId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_6f9395c9037632a31107c8a9e58" UNIQUE ("companyId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_6f9395c9037632a31107c8a9e58" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "companies" ADD CONSTRAINT "FK_6d64e8c7527a9e4af83cc66cbf7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "companies" DROP CONSTRAINT "FK_6d64e8c7527a9e4af83cc66cbf7"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_6f9395c9037632a31107c8a9e58"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_6f9395c9037632a31107c8a9e58"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "companyId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cnpj" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_a7815967475d0accd76feba8a1e" UNIQUE ("cnpj")`);
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
