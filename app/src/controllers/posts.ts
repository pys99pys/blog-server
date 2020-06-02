import { Context } from "koa";
import Post from "../entity/post";
import database from "../lib/database";

export default async (context: Context) => {
  const { page, tag } = context.params;
  const connection = await database();
  const posts = await connection
    .getRepository(Post)
    .createQueryBuilder("post")
    .leftJoinAndSelect("post.tagRelations", "tagRelation")
    .innerJoinAndSelect("tagRelation.tag", "tag")
    .where(!!tag ? `tag.name = "${tag}"` : "")
    .getMany();

  context.body = posts.map(({ tagRelations, ...post }) => ({
    ...post,
    tags: tagRelations.map(({ tag }) => tag.name),
  }));
};
