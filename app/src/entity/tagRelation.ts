import { ManyToOne, OneToOne, JoinColumn, Entity } from "typeorm";
import Post from "./post";
import Tag from "./tag";
import Base from "./base";

@Entity("tagRelation")
export default class CategoryRelation extends Base {
  @ManyToOne(() => Post, (post) => post.tagRelations)
  @JoinColumn()
  post!: Post;

  @ManyToOne(() => Tag, (tag) => tag.tagRelations)
  @JoinColumn()
  tag!: Tag;
}
