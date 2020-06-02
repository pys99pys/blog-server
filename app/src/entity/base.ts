import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export default class Base {
  @PrimaryGeneratedColumn({ comment: "인덱스" })
  id!: number;

  @CreateDateColumn({ comment: "생성일" })
  createdAt!: string;

  @UpdateDateColumn({ comment: "수정일" })
  updatedAt!: string;
}
