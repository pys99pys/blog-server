import { OneToMany, JoinColumn, Column, Entity } from "typeorm";
import TagRelation from "./tagRelation";
import Base from "./base";

@Entity()
export default class Post extends Base {
  @Column({ comment: "제목" })
  subject!: string;

  @Column({ comment: "설명" })
  description!: string;

  @Column({ type: "text", comment: "내용" })
  content!: string;

  @OneToMany(() => TagRelation, (tagRelation) => tagRelation.post)
  @JoinColumn()
  tagRelations!: TagRelation[];
}
