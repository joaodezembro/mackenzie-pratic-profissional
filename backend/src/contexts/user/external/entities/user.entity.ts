/* eslint-disable no-use-before-define */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { CompanyEntity } from "../../../company/external/entities/company.entity";
import { IUserModel } from "../../domain/models/user.model";

export enum UserTypeEnum {
  COMPANY = "company",
  COLLABORATOR = "collaborator",
}

@Entity("users")
export class UserEntity implements IUserModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  cpf: string;

  @OneToOne(() => CompanyEntity, company => company.id)
  @JoinColumn({ name: "companyId" })
  company?: CompanyEntity;

  @ManyToMany(() => UserEntity, user => user.id)
  @JoinColumn({ name: "collaborators" })
  collaborators?: UserEntity[];

  @Column()
  type: UserTypeEnum;

  @Column()
  birthDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
