import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ICompanyModel } from "../../domain/models/company.model";
import { UserEntity } from "../../../user/external/entities/user.entity";

@Entity("companies")
export class CompanyEntity implements ICompanyModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: "userId" })
  user: UserEntity;

  @Column({ unique: true })
  cnpj: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
