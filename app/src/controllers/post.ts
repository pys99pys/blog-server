import { Context } from "koa";
import Post from "../entity/post";
import database from "../lib/database";

export default async (context: Context) => {
  const { id } = context.params;
  const connection = await database();
  const post = await connection.manager
    .createQueryBuilder(Post, "post")
    .leftJoinAndSelect("post.tagRelations", "tagRelation")
    .innerJoinAndSelect("tagRelation.tag", "tag")
    .where("post.id=:id", { id })
    .getOne();

  const { tagRelations, ...rest } = post as any;

  context.body = {
    ...rest,
    tags: tagRelations.map(({ tag }: any) => tag.name),
  };
};
