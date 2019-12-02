import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn({ comment: '인덱스' })
  id!: number;

  @Column({ comment: '태그' })
  tags!: string;

  @Column({ comment: '제목' })
  subject!: string;

  @Column({ type: 'text', comment: '내용' })
  content!: string;

  @CreateDateColumn({ comment: '등록일' })
  createAt!: string;

  @UpdateDateColumn({ comment: '수정일' })
  updateAt!: string;
}
