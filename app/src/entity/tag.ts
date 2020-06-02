import { OneToMany, JoinColumn, Column, Entity } from "typeorm";
import TagRelation from "./tagRelation";
import Base from "./base";

@Entity()
export default class Tag extends Base {
  @Column({ comment: "태그명" })
  name!: string;

  @OneToMany(() => TagRelation, (tagRelation) => tagRelation.tag)
  @JoinColumn()
  tagRelations!: TagRelation[];
}
