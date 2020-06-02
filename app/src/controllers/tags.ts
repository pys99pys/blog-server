import { Context } from "koa";
import Tag from "../entity/tag";
import Post from "../entity/post";
import database from "../lib/database";

export default async (context: Context) => {
  const connection = await database();
  const tags = await connection
    .getRepository(Tag)
    .createQueryBuilder("tag")
    .select("tag.name")
    .leftJoinAndSelect("tag.tagRelations", "tagRelation")
    .getMany();

  const postCount = await connection
    .getRepository(Post)
    .createQueryBuilder("post")
    .getCount();

  context.body = [
    {
      name: "All",
      count: postCount,
    },
  ].concat(
    tags.map(({ name, tagRelations }) => ({
      name,
      count: tagRelations.length,
    }))
  );
};
